import { useState } from "react";
import { api } from "../../../api/client";
import { toast } from "react-toastify";
import { Endpoints } from "../../../constants/Endpoints";
import type {
  FeedbackRequest,
  FeedbackResponse,
} from "../../../types/feedback";
import { StarRating } from "../../common/StarRating";

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
        Endpoints.Feedback,
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
        <p className="pageSubtitle"></p>
        <div className="accentDivider" />

        <div className="formColumn formColumnWide">
          <div
            className="stack-h w-100"
            style={{ alignItems: "flex-start", gap: "0.5rem" }}
          >
            <div
              className="field"
              style={{ flex: "1 1 320px", width: "auto", paddingBottom: 0 }}
            >
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
                {nameError || "\u00A0"}
              </span>
            </div>

            <StarRating
              value={rating}
              onChange={(n) => setRating(n)}
              error={ratingError}
              ariaDescribedBy="rating-error"
            />
          </div>
          
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
              {feedbackError || "\u00A0"}
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
