import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"].split(" ")[1];
    console.log(token);
    if (!token) {
        return res.status(401).json({
            status: "Error",
            message: "No token provided",
        });
    } else {

        jwt.verify(token, process.env.BCRYPT_SECRET, (err) => {
            if (err) {
                return res.status(500).json({
                    status: "Error",
                    message: "Failed to authenticate token",
                });
            } else {
                next();
            }
        });
    }
};
