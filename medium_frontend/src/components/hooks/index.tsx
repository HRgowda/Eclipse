import { useEffect, useState } from "react";
import axios from "axios";
import { Backend_Url } from "../../Url";

// Define the Blog interface
interface Blog {
  title: string;
  content: string;
  id: string;
  publishedDate: string;
  author: {
    name: string;
  };
}

// Custom hook for fetching blogs data
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios.get(`${Backend_Url}/api/v1/blog/bulk`,{
      headers:{
        Authorization: localStorage.getItem("token") || ""
      }
    }).then(response=>{
      setBlogs(response.data.posts)
      setLoading(false)
    })
  },[])

  return { loading, blogs };
};
