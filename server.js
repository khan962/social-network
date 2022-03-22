const express = require("express");
const app = express();

//dsb connection
const connectDB = require("./config/db");
connectDB();
//json perser/body parser
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("App running"));
const PORT = process.env.PORT || 5000;

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/posts", require("./routes/api/post"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
