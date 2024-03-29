const path = require("path");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/usersRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const connectDB = require("./config/db");
const notFound = require("./middleware/errorHandler");
const PORT = process.env.PORT || 5000;

app.use(express.json());
dotenv.config();
connectDB();

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/uploads", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const folder = path.resolve();
app.use("/uploads", express.static(path.join(folder, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
