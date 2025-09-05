import { Router } from "express";
import { passportCall } from "../../middlewares/passport/passport-call.js";
import { sessionController } from "../../controllers/sessions.controller.js";

const router = Router();

router.get("/current", passportCall("jwtCookies"), sessionController.current);

export default router;
