import { Router } from "express";
import { productController } from "../../controllers/product.controller.js";
import { verifyObjectId } from "../../middlewares/verify-objectid.js";

const router = Router();

router.get("/", productController.getAll);
router.get("/:id", verifyObjectId("id"), productController.getById);
router.post("/", productController.create);
router.put("/:id", verifyObjectId("id"), productController.update);
router.delete("/:id", verifyObjectId("id"), productController.delete);

export default router;
