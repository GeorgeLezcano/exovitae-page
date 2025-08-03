export default function FeedBackSection() {

   const handleSubmit = () => {
      alert("Not Implemented")
   }

  return (
    <div className="formContainer">
      <h1>Feedback</h1>
      {/* TODO: Sanitize input, limit character count */}
      <input className="inputField" placeholder="Name" type="text" />
      <textarea className="inputFieldLarge" placeholder="Your feedback..." />
      <button onClick={handleSubmit} className="detailsButton">Submit</button>
    </div>
  );
}
