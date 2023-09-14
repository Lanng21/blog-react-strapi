import React, { useState, useEffect } from "react";
import { Blogs } from "../components";
import { useNavigate } from "react-router-dom";
import AddBlogForm from "../components/AddBlogForm";

const Homepage = ({ blogs }) => {
  const [blogAdded, setBlogAdded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (blogAdded) {
      setBlogAdded(false);

      navigate(-1);
    }
  }, [blogAdded, navigate]);
  const handleBlogAdded = () => {
    setBlogAdded(true);
  };
  return (
    <div>
      <AddBlogForm onBlogAdded={handleBlogAdded} />

      <Blogs blogs={blogs} />
    </div>
  );
};

export default Homepage;
