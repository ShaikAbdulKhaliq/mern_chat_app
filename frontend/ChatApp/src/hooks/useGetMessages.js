import React, { useEffect } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'

const useGetMessages = () => {
 const [loading,setLoading]=React.useState(false)
 const{messages,setMessages,selectedConversation}=useConversation()

 useEffect(()=>{

    const getMessages=async()=>{
        setLoading(true)
        try {
            const response=await fetch(`/api/messages/${selectedConversation._id}`)
            const data=await response.json()
            if(data.error){
                throw new Error(data.error)
            }
            console.log(data)
            setMessages(data)
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    
    if(selectedConversation?._id) getMessages()

 },[selectedConversation?._id,setMessages])
 return {loading,messages}
}

export default useGetMessages