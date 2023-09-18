const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/dbConnect");
const authRouter = require("./routers/authRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

const app = express();

//Connect DB
dbConnect();

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//Routers
app.use("/api/user", authRouter);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ==> ${PORT}`);
});
