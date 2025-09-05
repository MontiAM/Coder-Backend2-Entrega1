import mongoose from "mongoose";

export const verifyObjectId = (paramName = "id") => {
    return (req, res, next) => {
        if (!mongoose.Types.ObjectId.isValid(req.params[paramName])) {
            return res
                .status(400)
                .json({ message: `Invalid ${paramName} format` });
        }
        next();
    };
};
