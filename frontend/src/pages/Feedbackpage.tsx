import { useState } from "react";
import { submitFeedback } from "../services/feedbackService";

const FeedbackPage = () => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(5);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitFeedback({ name, rating, message });
      alert('Feedback submitted!');
    } catch (error) {
      alert('Failed to submit feedback');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="number" value={rating} onChange={e => setRating(Number(e.target.value))} min="1" max="5" />
      <textarea placeholder="Your Feedback" value={message} onChange={e => setMessage(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackPage;