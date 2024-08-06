import { BlogCard } from "../components/BlogCard";
import { AppBar } from "../components/AppBar";
import { useBlogs } from "../components/hooks/index";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="max-w-lg">
          {blogs.map(blog=>(
            <BlogCard authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate={blog.publishedDate}></BlogCard>
          ))
          }
        </div>
      </div>
    </div>
  );
};
