import { Router } from "express";
import { cartController } from "../../controllers/cart.controller.js";
import { verifyObjectId } from "../../middlewares/verify-objectid.js";

const router = Router();

router.get("/", cartController.getAll);
router.get("/:cid", verifyObjectId("cid"), cartController.getById);
router.post("/", cartController.create);
router.delete("/:cid", verifyObjectId("cid"), cartController.delete);
router.post(
    "/:cid/products/:pid",
    verifyObjectId("cid"),
    verifyObjectId("pid"),
    cartController.addProductToCart
);
router.put(
    "/:cid/products",
    verifyObjectId("cid"),
    cartController.updateProductsToCart
);
router.delete(
    "/:cid/products/:pid",
    verifyObjectId("cid"),
    verifyObjectId("pid"),
    cartController.removeProductFromCart
);

export default router;
