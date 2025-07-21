import express from 'express';
import cors from 'cors';   
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

import feedbackRoutes from './routes/feedback.js';
import orderRoutes from './routes/order.js';

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/feedback', feedbackRoutes);
app.use('/api/order', orderRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('SmartStep backend is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);

});
