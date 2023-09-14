import React, { useState } from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const AddBlogForm = ({ onBlogAdded }) => {
  const [blogData, setBlogData] = useState({
    blogTitle: "",
    blogDesc: "",
    blogContent: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:1337/api/blogs", {
        data: blogData,
      });

      if (response.status === 201) {
        onBlogAdded();

        console.log("Blog created successfully");
        setBlogData({
          blogTitle: "",
          blogDesc: "",
          blogContent: "",
        });
      }
    } catch (error) {
      console.error("Error creating blog:", error.response.data);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Thêm Blog Mới</h2>
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
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-300"
        >
          Thêm
        </button>
      </form>
    </div>
  );
};

export default AddBlogForm;
