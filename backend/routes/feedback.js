import express from 'express';
import { submitFeedback } from '../controller/feedbackController.js';
import { getAllFeedbacks } from '../controller/feedbackController.js';

const router = express.Router();

router.post('/', submitFeedback);
router.get('/', getAllFeedbacks);



// router.get('/', (req, res) => {
//   res.send("Feedback route is working!");
//   const sampleFeedback = {
//     name: "Rabin",
//     rating: 5,
//     message: "This stick is amazing!",
//     status: "success"
//   };

//   res.json(sampleFeedback)
// });

export default router;