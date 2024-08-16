import { useState } from "react"
import { Avatar } from "./BlogCard"
import {Link} from "react-router-dom"
export const AppBar = () => {

  return <div className="px-10 py-4 flex justify-between border-b">
    <Link to={'/blogs'} className="flex flex-col justify-center font-bold cursor-pointer ">
    MindCraft
    </Link>
    <div>
      <Link to={`/publish`}>
        
        <button type="button" className="mr-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">New Blog</button>

      </Link>

      {/* Logout button with functionality navigating to signin page by removing user token and name */}
      <Link to={`/signin`}>
        
        <button onClick={()=>{
          localStorage.removeItem("token");
          localStorage.removeItem("name");
          alert("Successfully logged out");
        }}  type="button" className="mr-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Logout</button>
      
      </Link>

      <Avatar size={"big"} name={"Hemanth Gowda"}></Avatar>
    </div>    
  </div>
} 