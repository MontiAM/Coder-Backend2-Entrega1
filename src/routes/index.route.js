// Routes
import viewsRouter from "./vews/views.route.js";
import productsRoute from "./api/products.routes.js";
import cartRoute from "./api/cart.routes.js";
import userRouter from "./api/users.route.js";
import sessionRouter from "./api/sessions.route.js";

import { verifyRole } from "../middlewares/verify-role.js";
import { passportCall } from "../middlewares/passport/passport-call.js";

class IndexRoute {
    initRoutes(app) {
        app.use("/", viewsRouter);
        app.use(
            "/api/products",
            passportCall("jwtCookies"),
            verifyRole("user"),
            productsRoute
        );
        app.use(
            "/api/cart",
            passportCall("jwtCookies"),
            verifyRole("user"),
            cartRoute
        );
        app.use("/api/users", userRouter);
        app.use("/api/sessions", sessionRouter);
    }
}

export default new IndexRoute();
