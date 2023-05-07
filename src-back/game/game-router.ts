import { Router } from "express";

const router = Router();

router.post("/", (req, res, next) => {
  // 10 Make a new game

  // 20 Send game id
  res.json({
    hello: "world",
  });
});

export default router;
