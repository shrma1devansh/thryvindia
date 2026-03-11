require("dotenv").config();

const express = require("express");
const cors = require("cors");

const waitlistRoutes = require("./routes/waitlistRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", waitlistRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port 5000");
});
