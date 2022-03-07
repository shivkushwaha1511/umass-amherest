import express from "express";

const router = express.Router();
import { verifyToken } from "../middlewares";

import { genToken, handleToken } from "../controllers/auth";

router.get("/gen-token", genToken);
router.get("/verify-token", verifyToken, handleToken);

module.exports = router;
