export const verifyRole = (role) => {
    return (req, res, next) => {
        if (!req.user) return res.status(401).json({ message: "Unauthorized" });
        if (req.user.role && req.user.role.toLowerCase() !== role.toLowerCase())
            return res.status(403).json({ message: "Forbidden" });
        next();
    };
};
