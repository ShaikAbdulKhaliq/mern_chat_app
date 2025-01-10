import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
 const useLogout = () => {  
    const [loading,setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const logout=async()=>{
        setLoading(true)
        try {
            const success=await fetch("/api/auth/logout",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(!success){
                throw new Error("An error occurred")
            }
            localStorage.removeItem("chat-user")    
            setAuthUser(null)

        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading,logout}
}

export default useLogout