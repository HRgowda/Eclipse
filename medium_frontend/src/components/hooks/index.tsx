import { useEffect, useState } from "react";
import axios from "axios";
import { Backend_Url } from "../../Url";

// Define the Blog interface
interface Blog {
  title: string;
  content: string;
  id: string;
  published: boolean;
  author: {
    name: string;
  };
}

// Custom hook for fetching blogs data
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${Backend_Url}/api/v1/blog/bluk`, {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        });
        console.log(blogs); // Debugging line
        // Ensure that response.data.post is an array
        await setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]); // Fallback to empty array in case of error
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { loading, blogs };
};
