import { AppBar } from "./AppBar"
import { Blog } from "./hooks/index"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }:{blog:Blog}) =>{
  return <div>
    <AppBar></AppBar>
    <div className="flex justify-center pt-7">
      <div className="grid grid-cols-12 px-10 pt-200 ">
        <div className=" col-span-8 ">
          <div className="text-5xl font-extrabold">
            {blog.title}
          </div>
          <div className="pt-5">
            Posted On {blog.publishedDate}
          </div>
          <div className="text-xl pt-3 font-thin">
            {blog.content}
          </div>
        </div>

        <div className=" col-span-4 px-10">
          <div className="font-semibold">
            Author
          </div>
          <div className="flex py-3">
            <div className="pr-2 flex flex-col justify-center">
              <Avatar name={blog.author.name || "Anonymous"} size="big"></Avatar>
            </div>
            <div>            
              <div className="font-bold text-2xl">
                {blog.author.name || "Anonymous"}
              </div>            
            
              <div className="font-thin">
                  Hello guys Im Hemanth R a Software Engineer!
              </div>
            </div>
          </div>
            
        </div>
      </div>
    </div>
</div>
}