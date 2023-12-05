const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/student");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/api/students', router)

function connectMongoose() {
  mongoose.connect("mongodb://localhost/student_management").then(() => console.log("Connected!Db"))
    .catch((err) => console.error(err));
}
connectMongoose();



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
