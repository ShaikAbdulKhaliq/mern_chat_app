import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (UserId,res) => {
  const token= jwt.sign({ UserId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  
  res.cookie("jwt",token,{
    maxAge: 15*24*60*60*1000,//ms
    htppOnly:true,//prevent xxs attacks cross site scripting attacks
    sameSite:"strict" //csrf attacks cross-site request forgery attacks
  })
}

export default generateTokenAndSetCookie;

