import jwt from "jsonwebtoken"
export const isAuth = async(req, res, next) => {
    try{
        let {token} = req.cookies
        if(!token){
            return res.status(400).json({
                message: "User does not have a token..."
            })
        }

        const verifyToken = await jwt.verify(token , process.env.JWT_SECRET);
        if(!verifyToken){
            return res.status(400).json({
                message: "User does not have a valid token..."
            })
        }
        req.userId = verifyToken.userId;
        next();
    }
    catch(err){
        return res.status(404).json({
            success: false,
            message: err.message
        })
    }
}
