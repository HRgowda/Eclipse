import { BlogCard } from "../components/BlogCard";
import { AppBar } from "../components/AppBar";
import { useBlogs } from "../components/hooks/index";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>
      <div>
        <AppBar></AppBar>
      </div>
      <BlogSkeleton></BlogSkeleton>
      {/* <BlogSkeleton></BlogSkeleton>
      <BlogSkeleton></BlogSkeleton>
      <BlogSkeleton></BlogSkeleton>
      <BlogSkeleton></BlogSkeleton> */}
    </div>;
  }

  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div>
          {blogs.map(blog=>(
            <BlogCard id={blog.id} authorName={blog.author.name || "Anonymous"} title={blog.title} content={blog.content} publishedDate={blog.publishedDate}></BlogCard>
          ))
          }
        </div>
      </div>
    </div>
  );
};
