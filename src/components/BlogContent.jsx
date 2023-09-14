import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EditBlogForm from "./EditBlogForm";

const BlogContent = ({ blogs, onDeleteClick }) => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  let blog = {};
  if (blog) {
    let arr = blogs.data.filter((blog) => blog.id == id);
    blog = arr[0];
  } else {
    blog = {};
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="w-full pb-10 bg-[#f9f9f9]">
      <div className="max-w-[1240px] mx-auto">
        <div
          className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
         md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black"
        >
          <div className="col-span-2">
            <h1 className="font-bold text-2xl my-1 pt-5">
              {blog.attributes.blogTitle}
            </h1>
            <p className="text-gray-600 text-xl">{blog.attributes.blogDesc}</p>
            <div className="pt-5">{blog.attributes.blogContent}</div>
            <div className="mt-5">
              <button
                onClick={onDeleteClick}
                className="bg-red-500 text-white px-4 py-2 rounded-lg mr-4"
              >
                Delete
              </button>
              <button
                onClick={handleEditClick}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4"
              >
                Edit
              </button>
            </div>
            {isEditing && (
              <EditBlogForm
                blogId={blog.id}
                onBlogUpdated={() => setIsEditing(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
