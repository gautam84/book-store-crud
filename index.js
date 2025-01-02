const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const bookRoutes = require("./routes/bookRoutes");
const cors = require("cors");




dotenv.config();
const app = express();

// CORS
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
const PORT = process.env.PORT || 5000;



// Middleware
app.use(bodyParser.json());
app.use("/books", bookRoutes);


// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
