import { Avatar } from "./BlogCard"
import {Link} from "react-router-dom"
export const AppBar = () => {
  return <div className="px-10 py-4 flex justify-between border-b">
    <Link to={'/blogs'} className="flex flex-col justify-center font-semibold cursor-pointer">
      Eclipse
    </Link>
    <div>
      <Link to={`/publish`}>
        
        <button type="button" className="mr-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">New Blog</button>
        
      </Link>

      <Avatar size={"big"} name={"Hemanth Gowda"}></Avatar>
    </div>    
  </div>
} 