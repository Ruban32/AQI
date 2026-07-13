import express from "express";
import cors from "cors";
import aqiRoutes from "./routes/aqi";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/aqi", aqiRoutes);

app.get("/", (_req, res) => {
  res.send("AQI Dashboard Backend is running!");
});

export default app;
