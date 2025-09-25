import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import taskRoutes from "./routes/tasks";

dotenv.config();
const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

// routes
app.use("api/auth", authRoutes);
app.use("api/tasks", taskRoutes);

app.get("/health", (req, res) => res.send({ ok: true }));

const port = Number(process.env.PORT || 4000);
app.listen(port, () => console.log("Server listening on", port));
