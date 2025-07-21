const feedbacks = [];

export const submitFeedback = (req, res) => {
  const { name, rating, message } = req.body;

  if (!name || !rating || !message ) {
    return res.status(400).json({ status: "error", message: "Missing fields" });
  }


  
  const newFeedback = {
    name,
    rating,
    message,
    submittedAt: new Date().toISOString()
  };

  feedbacks.push(newFeedback);

  res.status(201).json({name : name, rating : rating, message : message, status: "success", data: newFeedback });
};

export const getAllFeedbacks = (req, res) => {
  res.json({ status: "success", data: feedbacks }); // <- fix: use feedbacks, not feedback
};