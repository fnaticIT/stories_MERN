import express from "express";
const router = express.Router();

import { save } from "../controllers/profile.js";

router.post("/save", save);
export default router;