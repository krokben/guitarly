import express from "express";
import getVoicings from "./routes/getVoicings";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.static("dist"));

app.get("/voicings", getVoicings);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
