import { Avatar } from "./BlogCard"

export const AppBar = () => {
  return <div className="px-10 py-4 flex justify-between border-b">
    <div className="flex flex-col justify-center font-semibold">
      Eclipse
    </div>

    <div>
      <Avatar size={"big"} name="Hemanth Gowda"></Avatar>
    </div>
    
  </div>
} 