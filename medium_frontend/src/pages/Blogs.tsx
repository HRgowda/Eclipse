import { BlogCard } from "../components/BlogCard";
import { AppBar } from "../components/AppBar";
import { useBlogs } from "../components/hooks";

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
          {blogs && blogs.map(blog => (
            <BlogCard
              key={blog.title} // Ensure each BlogCard has a unique key
              authorName={blog.author.name}
              title={blog.title}
              content={blog.content}
              publishedDate="August 2, 2024"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
