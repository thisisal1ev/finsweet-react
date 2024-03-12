import { useParams } from "react-router-dom"
import { blogs } from "../data";

const BlogDetail = () => {
  const { title } = useParams();
  console.log(title);

  const detailBlog = blogs.find(blog => {
    return blog.title === title
  });

  console.log(detailBlog);

  return (
    <>

    </>
  )
}

export default BlogDetail