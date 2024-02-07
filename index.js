const express = require("express");
const sequelize = require("./utils/utils");
const bodyParser = require("body-parser");
const multer = require("multer");
const customerRoutes = require("./routes/customerRoutes");
const voucherRoutes = require("./routes/voucherRoutes");

const app = express();

const PORT = process.env.PORT || 8081;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Routes
app.use("/api/v1/customers", customerRoutes);
app.use("/api/v1/vouchers", voucherRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log("Database Connected Successfully");
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
