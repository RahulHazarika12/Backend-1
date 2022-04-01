import express from "express";
import bodyParser from "body-parser"; //incoming post request bodies

const app = express();
const PORT = 5000; //custom port

app.use(bodyParser.json()); //using json data (js oject notation)

app.get("/", (req, res) => {
  console.log("[test]");
  res.send("Hello from homepage");
});

app.listen(PORT, () => {
  console.log(`Server Running on port: http://localhost:${PORT}`);
});
