import { useState } from "react";
import { api } from "../../api/client";
import { toast } from "react-toastify";

type FeedbackRequest = {
  name: string;
  message: string;
};

type FeedbackResponse = {
  id: string;
  name: string;
  message: string;
  datePosted: string;
};

export default function FeedBackSection() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const [nameError, setNameError] = useState("");
  const [feedbackError, setFeedbackError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const NAME_MAX = 64;
  const FEEDBACK_MAX = 1000;
  const FEEDBACK_MIN = 10;

  const handleSubmit = async () => {
    setNameError("");
    setFeedbackError("");
    setGeneralError("");
    setLoading(true);

    const cleanName = name.trim();
    const cleanFeedback = feedback.trim();

    if (!cleanName) setNameError("Name is required.");
    else if (cleanName.length > NAME_MAX) setNameError("Name is too long.");

    if (!cleanFeedback) setFeedbackError("Feedback is required.");
    else if (cleanFeedback.length < FEEDBACK_MIN)
      setFeedbackError("Please provide more detail.");
    else if (cleanFeedback.length > FEEDBACK_MAX)
      setFeedbackError("Feedback is too long.");

    if (
      !cleanName ||
      !cleanFeedback ||
      cleanName.length > NAME_MAX ||
      cleanFeedback.length < FEEDBACK_MIN ||
      cleanFeedback.length > FEEDBACK_MAX
    ) {
      setLoading(false);
      return;
    }

    try {
      const response = await api.post<FeedbackResponse, FeedbackRequest>(
        "/api/feedback",
        {
          name: cleanName,
          message: cleanFeedback,
        }
      );

      setName("");
      setFeedback("");

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
    <div className="formContainer">
      <h1>Feedback</h1>

      <div className="formColumn">
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
    </div>
  );
}
