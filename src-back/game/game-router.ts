import { Router } from "express";

import type { NewGameResponse } from "~common/types/index.js";

const router = Router();

router.post("/", (req, res, next) => {
  // 10 Make a new game

  // 20 Send game id
  res.json({
    gameId: "3",
  } as NewGameResponse);
});

export default router;
