import { useBlog } from "../components/hooks";
import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { AppBar } from "../components/AppBar";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || " ",
  });

  if (loading) {
    return  <div>
      <div>
        <AppBar></AppBar>
      </div>
      <Spinner></Spinner>
  </div>
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
