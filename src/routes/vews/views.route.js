import Router from "express";
import { viewsController } from "../../controllers/view.controller.js";

const router = Router();

router.get("/", viewsController.index);
router.get("/login", viewsController.login);
router.get("/register", viewsController.register);

export default router;
