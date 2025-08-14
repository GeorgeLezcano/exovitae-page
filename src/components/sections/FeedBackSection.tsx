import { useState } from "react";
import { api } from "../../api/client";
import { toast } from "react-toastify";

type FeedbackRequest = {
  name: string;
  message: string;
  rating: number;
};

type FeedbackResponse = {
  id: string;
  name: string;
  message: string;
  datePosted: string;
  rating?: number;
};

function StarRating({
  value,
  onChange,
  error,
  ariaDescribedBy,
}: {
  value: number | "";
  onChange: (val: number) => void;
  error?: string;
  ariaDescribedBy?: string;
}) {
  const current = typeof value === "number" ? value : 0;

  const setByKey = (dir: "left" | "right" | "home" | "end") => {
    const v = current;
    if (dir === "left") onChange(Math.max(1, v - 1 || 1));
    if (dir === "right") onChange(Math.min(5, (v || 0) + 1));
    if (dir === "home") onChange(1);
    if (dir === "end") onChange(5);
  };

  return (
    <div className="field">
      <div
        role="radiogroup"
        aria-label="Rating"
        aria-describedby={ariaDescribedBy}
        className="starsRow"
      >
        {[1, 2, 3, 4, 5].map((n) => {
          const filled = n <= current;
          const selected = current === n;
          return (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(n)}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  setByKey("left");
                } else if (e.key === "ArrowRight") {
                  e.preventDefault();
                  setByKey("right");
                } else if (e.key === "Home") {
                  e.preventDefault();
                  setByKey("home");
                } else if (e.key === "End") {
                  e.preventDefault();
                  setByKey("end");
                } else if (e.key === " " || e.key === "Enter") {
                  e.preventDefault();
                  onChange(n);
                }
              }}
              title={`${n} star${n > 1 ? "s" : ""}`}
              className={`starButton ${filled ? "isFilled" : ""}`}
            >
              {filled ? "★" : "☆"}
            </button>
          );
        })}
        <span className="starValue">
          {current ? `${current}/5` : "Select rating"}
        </span>
      </div>
      <span id={ariaDescribedBy} className="errorFloat">
        {error}
      </span>
    </div>
  );
}

export default function FeedBackSection() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState<number | "">("");
  const [loading, setLoading] = useState(false);

  const [nameError, setNameError] = useState("");
  const [feedbackError, setFeedbackError] = useState("");
  const [ratingError, setRatingError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const NAME_MAX = 64;
  const FEEDBACK_MAX = 1000;
  const FEEDBACK_MIN = 10;

  const handleSubmit = async () => {
    setNameError("");
    setFeedbackError("");
    setRatingError("");
    setGeneralError("");
    setLoading(true);

    const cleanName = name.trim();
    const cleanFeedback = feedback.trim();
    const cleanRating = typeof rating === "number" ? rating : Number.NaN;

    if (!cleanName) setNameError("Name is required.");
    else if (cleanName.length > NAME_MAX) setNameError("Name is too long.");

    if (!cleanFeedback) setFeedbackError("Feedback is required.");
    else if (cleanFeedback.length < FEEDBACK_MIN)
      setFeedbackError("Please provide more detail.");
    else if (cleanFeedback.length > FEEDBACK_MAX)
      setFeedbackError("Feedback is too long.");

    if (!Number.isFinite(cleanRating) || cleanRating < 1 || cleanRating > 5) {
      setRatingError("Rating is required (1–5).");
    }

    if (
      !cleanName ||
      !cleanFeedback ||
      cleanName.length > NAME_MAX ||
      cleanFeedback.length < FEEDBACK_MIN ||
      cleanFeedback.length > FEEDBACK_MAX ||
      !Number.isFinite(cleanRating) ||
      cleanRating < 1 ||
      cleanRating > 5
    ) {
      setLoading(false);
      return;
    }

    try {
      const response = await api.post<FeedbackResponse, FeedbackRequest>(
        "/api/feedback",
        { name: cleanName, message: cleanFeedback, rating: cleanRating }
      );

      setName("");
      setFeedback("");
      setRating("");

      if (response) {
        toast.success("Feedback submitted successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch {
      setGeneralError("Failed to submit feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sectionShell">
      <section className="sectionCard">
        <h1 className="pageTitle">Game Feedback</h1>
        <div className="accentDivider" />

        <div className="formColumn formColumnWide">
          <div className="field">
            <input
              className={`inputField ${nameError ? "inputError" : ""}`}
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={!!nameError}
              aria-describedby="name-error"
              maxLength={NAME_MAX}
            />
            <span id="name-error" className="errorFloat">
              {nameError}
            </span>
          </div>

          <StarRating
            value={rating}
            onChange={(n) => setRating(n)}
            error={ratingError}
            ariaDescribedBy="rating-error"
          />

          <div className="field">
            <textarea
              className={`inputFieldLarge ${feedbackError ? "inputError" : ""}`}
              placeholder="Your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              aria-invalid={!!feedbackError}
              aria-describedby="feedback-error"
              maxLength={FEEDBACK_MAX}
            />
            <span id="feedback-error" className="errorFloat">
              {feedbackError}
            </span>
          </div>

          <button
            onClick={handleSubmit}
            className="sectionButton"
            style={{ alignSelf: "center" }}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          <div className="generalErrorSlot" role="alert">
            {loading ? (
              <span className="spinner"></span>
            ) : (
              generalError && <span className="errorText">{generalError}</span>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
