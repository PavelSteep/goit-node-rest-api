const express = require("./app");
const cors = require("cors");
const contactsRoutes = require("./routes/contactsRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message || "Server error" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
