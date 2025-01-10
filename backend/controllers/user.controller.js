import User from "../models/user.model.js"

 const getUsersForSiderbar=async(req,res)=>{
    try {
        const loggeduserId=req.user?._id
        //remaining users except logged in user
        const filteredUsers=await User.find({_id:{$ne:loggeduserId}}).select("-password")
        res.status(200).json(filteredUsers)
        
    } catch (error) {
        console.error("Error in getallusers controller",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}

export default getUsersForSiderbar;