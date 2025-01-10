import express from "express"
import path from "path"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import ConnectToMongoDB from "./db/ConnectToMongoDB.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import cookieParser from "cookie-parser"
import {server,app} from "./socket/socket.js" 
app.use(express.json()) ;  
app.use(cookieParser());
dotenv.config() 
const PORT=process.env.PORT || 5000

const __dirname=path.resolve() 
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/ChatApp/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","ChatApp","dist","index.html"))
})
server.listen(PORT,()=>{
ConnectToMongoDB()
console.log(`Server is running on port ${PORT}`)})