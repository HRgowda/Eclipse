import { useEffect, useState } from "react"
import axios from "axios"
import { Backend_Url } from "../../Url"

{/* Creating a custom hook for making blogs dynamic like fetching data from the backend */}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState([])

{/* We cant use async inside useEffect so define a function outside the useEffect and call inside it or just do with PROIMISES */}
  useEffect(()=>{
    axios.get(`${Backend_Url}/api/v1/blog/bluk`)
      .then(response => {
        setBlogs(response.data)
        setLoading(false)
      })
  }, []);

  return {
    loading, 
    blogs
  }
}