import { Avatar } from "./BlogCard"
import {Link} from "react-router-dom"
export const AppBar = () => {
  return <div className="px-10 py-4 flex justify-between border-b">
    <Link to={'/blogs'} className="flex flex-col justify-center font-semibold cursor-pointer">
      WordSmith
    </Link>  

    <div>
      <Avatar size={"big"} name="Hemanth Gowda"></Avatar>
    </div>
    
  </div>
} 