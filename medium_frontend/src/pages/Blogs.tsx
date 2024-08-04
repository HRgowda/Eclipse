import { BlogCard } from "../components/BlogCard"
import { AppBar } from "../components/AppBar"
import { useBlogs } from "../components/hooks"

export const Blogs = () => {
  const {loading, blogs} = useBlogs();

  if(loading){
    return <div>
      Loading..
    </div>
  }

  return  <div>
    <AppBar></AppBar>
    <div className="flex justify-center">
    <div className="max-w-lg">
      <BlogCard authorName="Alex Johnson" title="The Art of Remote Work: Tips and Tools for Productivity" content="Discuss the growing trend of remote work, including its benefits and challenges. Offer practical tips for staying productive, such as setting a dedicated workspace, establishing a routine, and using productivity tools like Trello, Slack, and Zoom. Share personal anecdotes or interviews with remote workers to provide a relatable perspective." publishedDate="August 2, 2024"></BlogCard>    
    
      <BlogCard authorName="Emily Davis" title="Sustainable Living: Simple Changes for a Greener Life" content="Focus on practical and easy-to-implement ways to live a more sustainable lifestyle. Cover topics like reducing plastic use, conserving energy, adopting a plant-based diet, and supporting eco-friendly brands. Include tips for beginners and emphasize the long-term benefits for the planet and future generations." publishedDate="2nd March 2024"></BlogCard>    
    
      <BlogCard authorName="Michael Lee" title="Travel Diaries: Exploring the Hidden Gems of Coastal India" content="Share a travelogue of a road trip along the coastal regions of India, including lesser-known destinations like Sakleshpur, Udupi, and Honnavar. Describe the scenic beauty, cultural experiences, local cuisine, and activities. Include tips on the best time to visit, accommodation options, and travel itineraries." publishedDate="2nd May 2024"></BlogCard>
    </div>
 </div>
 </div>
}