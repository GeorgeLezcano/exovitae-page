import { useEffect, useState } from "react";
import { api } from "../../../api/client";
import { useAuth } from "../../../auth/AuthContext";
import { Endpoints } from "../../../constants/Endpoints";

type Feedback = {
  id: string;
  name: string;
  datePosted: string;
  message: string;
  rating: number;
};

async function fetchAllFeedback(): Promise<Feedback[]> {
  return await api.get<Feedback[]>(Endpoints.Feedback);
}

async function deleteFeedback(id: string): Promise<void> {
  await api.delete<void>(`${Endpoints.Feedback}/${id}`);
}

export default function ManageFeedbackSection() {
  const { role } = useAuth();
  const isAdmin = (role || "").toLowerCase() === "admin";

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const refresh = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchAllFeedback();

      data.sort(
        (a, b) =>
          new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime()
      );
      setFeedbacks(data);
      setLastRefreshed(new Date().toLocaleString());
    } catch {
      setError("Failed to load feedback.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const handleDelete = async (id: string) => {
    if (!isAdmin) return;
    setError("");
    const prev = feedbacks;
    setFeedbacks((cur) => cur.filter((f) => f.id !== id));
    try {
      await deleteFeedback(id);
    } catch {
      setFeedbacks(prev);
      setError("Failed to delete feedback.");
    }
  };

  const renderStars = (rating: number) => {
    if (!rating || rating < 1) return null;
    const full = "★".repeat(Math.min(5, rating));
    const empty = "☆".repeat(Math.max(0, 5 - rating));
    return (
      <span
        className="starsRow"
        aria-label={`Rating: ${rating} out of 5`}
        style={{ fontSize: "0.95rem" }}
      >
        {full}
        {empty}
      </span>
    );
  };

  return (
    <div className="w-100 max-900">
      <div className="sectionHeader">
        <div>
          <h1 style={{ margin: 0 }}>Feedback Inbox</h1>
          <div className="metaSubtle">
            {feedbacks.length} item{feedbacks.length !== 1 ? "s" : ""}
            {lastRefreshed ? ` • Last refreshed: ${lastRefreshed}` : ""}
          </div>
        </div>

        <button
          className="sectionButton"
          onClick={refresh}
          disabled={loading}
          aria-label="Refresh feedback list"
          title="Refresh"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {loading ? <span className="spinner" /> : null}
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {error ? (
        <div className="errorText" style={{ marginBottom: "0.75rem" }}>
          {error}
        </div>
      ) : null}

      <div className="listStack">
        {feedbacks.length === 0 ? (
          <p>No feedback available.</p>
        ) : (
          feedbacks.map((f) => (
            <article key={f.id} className="card">
              <header className="cardHeader">
                <div>
                  <strong className="breakText">{f.name}</strong>
                  <div className="metaSubtle">
                    {new Date(f.datePosted).toLocaleString()}
                  </div>
                </div>

                <button
                  className="sectionButton"
                  onClick={() => handleDelete(f.id)}
                  aria-label={`Delete feedback from ${f.name}`}
                  title={isAdmin ? "Delete" : "Admin only"}
                  disabled={!isAdmin}
                >
                  Delete
                </button>
              </header>

              {f.rating ? (
                <div style={{ marginBottom: "0.5rem", color: "#a8d9ff" }}>
                  {renderStars(f.rating)}
                </div>
              ) : null}

              <div className="cardBody breakText">{f.message}</div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
