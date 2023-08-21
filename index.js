const express = require("express");
const {connection} = require("./connect/db")
const cors = require("cors");
const { userRouter } = require("./routes/userRoute");
const { auth } = require("./middleware/auth");
const { productRouter } = require("./routes/product");
require("dotenv").config()


const app = express();
app.use(cors());


app.use(express.json());
app.use("/users",userRouter)
app.use("/products",productRouter)
app.use(auth)



const PORT = process.env.PORT;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.error(error);
  }
  console.log(`Server is running on port ${PORT}`);
});