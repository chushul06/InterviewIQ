// frontend data
// create const
// token -> cookie

import jwt from "jsonwebtoken"
import User from "../models/userModel.js";

const signToken = async(userId) => {
    try{
        const token =  jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })
    return token;
    }
    catch(err){
        console.log(err);
    }
}


export const googleAuth = async(req, res) => {
    try{
        const {name, email} = req.body;
        let user = await User.findOne({email});
        if(!user){
            user = await User.create({
                name,
                email,
            })
        }

        let token = await signToken(user._id);
        res.cookie("token", token, {
            http:true,
            secure: false,
            sameSite:"strict",
            maxAge:7 * 24 * 60 * 60 * 1000, 
        });

        return res.status(200).json({
            sucess: "true",
            message: "User Succesfully created",
            user:{
                user,
            }
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            sucess: "false",
            message: err.message,
        })

    }
}

export const logOut = async(req, res) => {
    try{
        await res.clearCookie("token");
        return res.status(200).json({
            success: true,
            message: "Logged Out Successfully.."
        })
    }
    catch(err){
        return res.status(500).json({
            success: false,
            message: `Logout error: ${err}`
        })
    }
}