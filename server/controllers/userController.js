import User from "../models/userModel.js"

export const getCurrentUser = async(req,res) => {
    try{
        const userId = req.userId;
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({
                message: "The user doesnt exist...",
            })
        }
        return res.status(200).json({user});
    }
    catch(err){
        return res.status(400).json({
                message: `failed to get currentUser ${err}`,
        })
    }
}