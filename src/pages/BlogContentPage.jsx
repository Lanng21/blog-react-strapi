import React from "react";
import axios from "axios";
import { BlogContent } from "../components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogContentPage = ({ blogs }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteClick = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:1337/api/blogs/${id}`
      );

      if (response.status === 200) {
        console.log("Blog deleted successfully");

        navigate(-1);
      }
    } catch (error) {
      console.error("Error deleting blog:", error.response.data);
    }
  };

  return (
    <div>
      <BlogContent
        blogs={blogs ? blogs : ""}
        onDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default BlogContentPage;
