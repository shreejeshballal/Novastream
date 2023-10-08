import {
    createNewUser,
    findUniqueUser,
    deleteUser,
    authenticateUser,
    findUserWithId,
    refreshAccessToken,
} from "../services/UserService.js";

export const createUser = async (req, res) => {
    const { email, accessToken, password } = req.body;
    if (!accessToken && !password) {
        return res.status(400).json({
            status: "Error",
            message: "Missing accessToken or password field",
        });
    }
    const findUser = await findUniqueUser(email);
    if (findUser) {
        return res
            .status(400)
            .json({ status: "Error", message: "Email already exists" });
    }
    req.data = await createNewUser(req.body);
    loginUser(req, res);
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await findUniqueUser(email);
    if (!user) {
        return res
            .status(400)
            .json({ status: "Error", message: "User does not exist" });
    }

    const { accessToken, refreshToken } = await authenticateUser(
        password,
        user.password,
        user.id
    );

    res.cookie("jwt", refreshToken, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000 * 10,
    });

    return res.status(200).json({
        status: "Success",
        message: "User logged in successfully",
        data: req.data,
        token: accessToken,
    });
};

export const googleLogin = async (req, res) => { 
    const googleToken = req.body.googleToken;
    


};

export const removeUser = async (req, res) => {
    const { id } = req.params;
    const user = await findUserWithId(id);
    if (!user) {
        return res
            .status(400)
            .json({ status: "Error", message: "User does not exist" });
    }
    await deleteUser(id);
    return res.status(200).json({
        status: "Success",
        message: "User deleted successfully",
    });
};


export const refreshToken = async (req, res) => {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
        return res
            .status(401)
            .json({ status: "Error", message: "User not authenticated" });
    }
    const accessToken = await refreshAccessToken(refreshToken);
    return res.status(200).json({
        status: "Success",
        message: "Token refreshed successfully",
        token: accessToken,
    });
};
