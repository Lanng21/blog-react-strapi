import React, { useState, useEffect } from "react";
import axios from "axios";

const EditBlogForm = ({ blogId, onBlogUpdated }) => {
  const [blogData, setBlogData] = useState({
    blogTitle: "",
    blogDesc: "",
    blogContent: "",
  });

  const [updateSuccess, setUpdateSuccess] = useState(false); // New state variable

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/blogs/${blogId}`
        );
        const existingBlog = response.data.data.attributes;

        setBlogData({
          ...existingBlog,
        });
      } catch (error) {
        console.error("Error fetching blog data:", error.response.data);
      }
    };

    fetchBlogData();
  }, [blogId, updateSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:1337/api/blogs/${blogId}`,
        {
          data: blogData,
        }
      );

      if (response.status === 200) {
        setUpdateSuccess(true); // Set updateSuccess to true upon successful update
        onBlogUpdated();
      }
    } catch (error) {
      console.error("Error updating blog:", error.response.data);
    }
  };

  return (
    <div>
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="blogTitle"
            className="block text-gray-600 font-medium"
          >
            Tiêu đề:
          </label>
          <input
            type="text"
            id="blogTitle"
            value={blogData.blogTitle}
            onChange={(e) =>
              setBlogData({ ...blogData, blogTitle: e.target.value })
            }
            className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="blogDesc" className="block text-gray-600 font-medium">
            Mô tả:
          </label>
          <input
            type="text"
            id="blogDesc"
            value={blogData.blogDesc}
            onChange={(e) =>
              setBlogData({ ...blogData, blogDesc: e.target.value })
            }
            className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="blogContent"
            className="block text-gray-600 font-medium"
          >
            Nội dung:
          </label>
          <textarea
            id="blogContent"
            value={blogData.blogContent}
            onChange={(e) =>
              setBlogData({ ...blogData, blogContent: e.target.value })
            }
            className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditBlogForm;
