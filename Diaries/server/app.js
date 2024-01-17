require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const cors = require("cors");
const { connectDb } = require("./helpers/dbConfig");
const router = require("./routes/userfeedsRoutes");

const app = express();

app.use(express.json());
app.use(cors())
app.use("/api/diaries", router);

app.listen(PORT, async () => {
  await connectDb();
  console.clear();
  console.log(`listening to port ${PORT}`);
});
