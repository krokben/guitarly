import express from "express";
import getVoicings from "./routes/getVoicings";
import addVoicing from "./routes/addVoicing";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.static("dist"));

app.get("/voicings", getVoicings);
app.post("/voicings", addVoicing);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
