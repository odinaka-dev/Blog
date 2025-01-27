import React, { useEffect, useState } from "react";
import thumbnail from "../assets/blog.avif";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <section>
      <main className="blog_content grid grid-cols-[80%_20%] max-w-[90%] gap-4 mx-auto">
        <BannerComponent />
        <SideBar />
      </main>
    </section>
  );
};

// Banner Component
const BannerComponent = () => {
  return (
    <section className="welcome_banner">
      <div className="Banner">
        <h1 className="heading_text px-6">
          Welcome to the Home of Amazing Blogs
        </h1>
        <p className="banner_text px-14">
          "Welcome to our blog – your go-to destination for insightful articles,
          tips, and stories across a variety of topics. Whether you're seeking
          inspiration, practical advice, or the latest trends, we've got
          something for everyone. Explore, learn, and engage with our vibrant
          community!"
        </p>
      </div>
      <div className="mt-4">
        <MainPosts />
      </div>
    </section>
  );
};

// Main Posts Component
const MainPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const currentDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formattedDate = `${
    months[currentDate.getMonth()]
  } ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/blogs");
        const data = await response.json();
        if (data) {
          setBlogs(data);
        } else {
          setBlogs([]); // No blogs fetched
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    getBlog();
  }, []);

  return (
    <>
      <h5 className="text-[#01473e] border-l-[#01473e] border-l-2 pl-2 my-6">
        Recent Blogs
      </h5>
      <section className="grid grid-cols-3 gap-4">
        {blogs.map(({ _id, title, description }) => (
          <div
            className="blogs_one bg-white p-2 shadow-lg mt-4 rounded-[3px]"
            key={_id}
          >
            <div className="blogs_img">
              <Link to={`/blog/${_id}`}>
                <img
                  src={thumbnail}
                  alt="Blog Thumbnail"
                  className="rounded-[5px]"
                />
              </Link>
            </div>
            <div className="blogs_text">
              <h6 className="text-[14px] text-[#01473e]">{title}</h6>
              <p className="text-[13px] pb-4 pr-2">
                {description.length > 150
                  ? description.substring(0, 150) + "..."
                  : description}
              </p>
              <p className="text-[12px] text-[#01473e] font-bold">
                <span className="capitalize">{formattedDate}</span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

// Sidebar Component
const SideBar = () => {
  const SideView = [
    {
      id: 1,
      title: "How to get started in tech in 2025",
      date: "Jan 18th, 2025",
      Info: "Recently read",
    },
    {
      id: 2,
      title: "How to get started in tech in 2025",
      date: "Jan 18th, 2025",
      Info: "Recently read",
    },
    {
      id: 3,
      title: "How to get started in tech in 2025",
      date: "Jan 18th, 2025",
      Info: "Recently read",
    },
  ];

  return (
    <section className="side_bar">
      <h5 className="bg-[#01473e] text-white py-2 px-4 rounded-sm shadow-lg">
        Recent Blogs
      </h5>
      {SideView.map(({ id, Info, title, date }) => (
        <div
          className="blogs_one bg-white p-2 shadow-lg mt-4 rounded-[3px]"
          key={id}
        >
          <div className="blogs_text">
            <h6 className="text-[14px]">{title}</h6>
            <p className="text-[12px] flex flex-row justify-between items-center">
              <span>{Info}</span>
              <span>{date}</span>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default App;
