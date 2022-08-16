import express from "express";
import verifyUser from "../middlewares/verify-user";

const router = express.Router();

router.use(verifyUser);

router.get('/api/users/:username', );

export default router;