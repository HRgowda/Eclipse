import { useBlog } from "../components/hooks";
import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || " ",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if(!blog){
    return <div>
      Blog not found
    </div>
  }

  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};
