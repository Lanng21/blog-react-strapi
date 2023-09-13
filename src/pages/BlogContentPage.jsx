import React from "react";
import { BlogContent } from "../components";

const BlogContentPage = ({ blogs }) => {
  console.log(blogs);

  return (
    <div>
      <BlogContent blogs={blogs} />
    </div>
  );
};

export default BlogContentPage;
