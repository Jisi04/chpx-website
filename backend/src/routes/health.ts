import { Router } from "express";

export const healthRouter = Router();

// Used by Docker's HEALTHCHECK and by any host's uptime/liveness check —
// confirms the process is up and actually serving requests, not just running.
healthRouter.get("/", (_req, res) => {
  res.json({ status: "ok" });
});
