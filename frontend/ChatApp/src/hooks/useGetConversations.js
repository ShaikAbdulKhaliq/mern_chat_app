import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

const useGetConversations = () => {
 const[loading,setLoading]=React.useState(false)
const [conversations,setConversations]=React.useState([])

useEffect(()=>{
    const getConversations=async()=>{
        setLoading(true)
        try{
            const response=await fetch('api/users')
            const data=await response.json()
            if(data.error){
                throw new Error(data.error)
            }
            setConversations(data)
            setLoading(false)
        }catch(err){
            toast.error(err.message)
            setLoading(false)
        }finally{
            setLoading(false)
        }
    }
    getConversations()
},[])
return {loading,conversations}
}

export default useGetConversations