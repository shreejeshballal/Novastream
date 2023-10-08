import prisma from "../prisma/db.config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const findUniqueUser = async (email) => {
    return await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
};

export const findUserWithId = async (id) => {
    return await prisma.user.findUnique({
        where: {
            id: Number(id),
        },
    });
};

export const createNewUser = async (body) => {
    let newUser;
    if (body.password != null) {
        const hashedPassword = await bcrypt.hash(body.password, 10);
        newUser = await prisma.user.create({
            data: { ...body, password: hashedPassword },
        });
    } else {
        newUser = await prisma.user.create({ data: body });
    }
    const { email, id, username, profilePicture, createdAt } = newUser;
    return { email, id, username, profilePicture, createdAt };
};

export const deleteUser = async (id) => {
    await prisma.user.delete({
        where: {
            id: Number(id),
        },
    });
    return;
};

export const authenticateUser = async (password, userPassword, userId) => {
    const isPasswordValid = await bcrypt.compare(password, userPassword);
    if (!isPasswordValid) {
        return res
            .status(400)
            .json({ status: "Error", message: "Invalid password! Try again." });
    }
    const accessToken = jwt.sign(
        {
            id: userId,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "10m",
        }
    );

    const refreshToken = jwt.sign(
        {
            id: userId,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "10d" }
    );

    await prisma.user.update({
        where: {
            id: Number(userId),
        },
        data: {
            refreshToken: refreshToken,
        },
    });
    return { accessToken, refreshToken };
};


export const refreshAccessToken = async (refreshToken) => { 
    try {
        const { id } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const accessToken = jwt.sign(
            {
                id: id,
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "10m",
            }
        );
        return accessToken;
    } catch (error) {
        return res
            .status(500)
            .json({ status: "Error", message: "Internal server error" });
    }
}