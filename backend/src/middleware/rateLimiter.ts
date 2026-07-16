import rateLimit from "express-rate-limit";

// 5 submissions per 15 minutes per IP — generous for a real visitor,
// tight enough to blunt a bot hammering the endpoint.
export const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many submissions — please try again later." },
});
