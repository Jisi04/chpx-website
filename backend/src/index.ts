import express from "express";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";
import { healthRouter } from "./routes/health.js";
import { contactRouter } from "./routes/contact.js";

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

// Only this origin may call the API — your live site plus local dev.
// A comma-separated list also works, e.g. "https://chpx.ph,http://localhost:5173".
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim());

app.use(helmet());
app.use(
  cors({
    origin: ALLOWED_ORIGINS,
  })
);
app.use(express.json());

app.use("/api/health", healthRouter);
app.use("/api/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`CHPX backend listening on port ${PORT}`);
});
