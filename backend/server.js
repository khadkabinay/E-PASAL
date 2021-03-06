const express = require("express");
const app = express();
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/usersRoutes");
const orderRoutes = require("./routes/orderRoutes");
const connectDB = require("./config/db");
const notFound = require("./middleware/errorHandler");
const PORT = process.env.PORT || 5000;

app.use(express.json());
dotenv.config();
connectDB();
app.get("/", (req, res) => {
  res.send("API is running ...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
