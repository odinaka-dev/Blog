import React, { useState, useEffect } from "react";
import Image from "../assets/blog.avif";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  return (
    <section className="max-w-[90%] mx-auto">
      <div className="grid grid-cols-[80%_20%] gap-10">
        <BlogMainComponent />
        <BlogSideComponent />
      </div>
    </section>
  );
};

const BlogMainComponent = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/blogs/${id}`
        );
        const data = await response.json();
        if (data.success) {
          setBlog(data.blog);
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };
    fetchBlog();
  }, [id]);

  const date = new Date();

  // Add check for blog existence before rendering
  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div key={blog._id}>
        <div className="flex justify-between items-center mb-2">
          <h2 className="blog_title text-[20px] text-[#01473e] font-medium">
            {blog.title}
          </h2>
          <div className="text-[#01473e] flex items-center gap-10 font-medium cursor-pointer">
            <p>{blog.author}</p>
            <p>{`${date.getMinutes()} Minutes Read`}</p>
          </div>
        </div>
        <div className="">
          <img src={Image} alt="Blog Thumbnail" className="w-full rounded-lg" />
        </div>
        <p className="blog_text leading-8 my-8 text-[14px] text-left">
          {blog.description}
        </p>
      </div>
    </section>
  );
};

const BlogSideComponent = () => {
  return (
    <section className="mt-8">
      <div className="categories">
        <h2>Categories</h2>
        <ol className="text-[14px] leading-7">
          <li className="">Lifestyles</li>
          <li className="">Education</li>
          <li className="">Technology</li>
          <li className="">Article</li>
        </ol>
      </div>
      <div className="Reviews_comments">
        <h2>Comments</h2>
        <form action="" method="post">
          <textarea
            className="text-[14px] w-full border border-[1px] p-2 rounded-lg cursor-pointer"
            name=""
            id=""
            cols="10"
            rows="5"
            placeholder="comments about this blog"
          ></textarea>
          <div className="submit text-white bg-[#01473e] text-center text-[14px] cursor-pointer p-2 rounded-lg shadow-md">
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default BlogDetails;
