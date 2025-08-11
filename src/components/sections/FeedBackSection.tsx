import { useState } from "react";

export default function FeedBackSection() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  const [nameError, setNameError] = useState("");
  const [feedbackError, setFeedbackError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const handleSubmit = () => {
    setNameError("");
    setFeedbackError("");
    setGeneralError("");

    // Name required
    if (!name.trim()) {
      setNameError("Name is required.");
    }

    // Feedback required + minimum length example
    if (!feedback.trim()) {
      setFeedbackError("Feedback is required.");
    } else if (feedback.trim().length < 10) {
      setFeedbackError("Please provide more detail.");
    }

    // Stop on any field error
    if (!name.trim() || !feedback.trim() || feedback.trim().length < 10) return;

    alert(`Feedback submitted! (demo)\nName: ${name}\nMessage: ${feedback}`);
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
          />
          <span id="feedback-error" className="errorFloat">
            {feedbackError}
          </span>
        </div>

        {/* Smaller, centered button (to match your preference) */}
        <button
          onClick={handleSubmit}
          className="sectionButton"
          style={{ alignSelf: "center" }}
        >
          Submit
        </button>

        {/* Reserved space under the button for any general errors */}
        <div className="generalErrorSlot" role="alert">
          {generalError || "\u00A0"}
        </div>
      </div>
    </div>
  );
}
