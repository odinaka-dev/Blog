import React from "react";
import thumbnail from "../assets/blog.avif";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <section className="">
      <main className="blog_content grid grid-cols-[80%_20%] max-w-[90%] gap-4 mx-auto">
        <BannerComponent />
        <SideBar />
      </main>
    </section>
  );
};

// the landing page component - heading and the category as links
const BannerComponent = () => {
  return (
    <>
      <section className="welcome_banner">
        <div className="Banner">
          <h1 className="heading_text px-6">
            Welcome to home of Amazing Blogs
          </h1>
          <p className="banner_text px-14">
            "Welcome to our blog – your go-to destination for insightful
            articles, tips, and stories across a variety of topics. Whether
            you're seeking inspiration, practical advice, or the latest trends,
            we've got something for everyone. Explore, learn, and engage with
            our vibrant community!"
          </p>
        </div>
        <div className="mt-4">
          <MainPosts />
        </div>
      </section>
    </>
  );
};

// the main post component - the posts would link to the selective blog post created
const MainPosts = () => {
  const BlogPost = [
    {
      id: 1,
      title: "How to get started in tech in 2025",
      desc: "Are you looking to break into the tech industry in 2025? Whether you're starting from scratch or looking to pivot your career, there has never been a better time to enter the world of technology. In this post, we’ll walk you through the essential steps, from choosing the right skills to learning through hands-on projects and navigating the job market. Get ready to embark on your journey into one of the fastest-growing and most rewarding industries today!",
      date: "Jan 18th, 2025",
      Info: "Recently read",
    },
    {
      id: 2,
      title: "How to get started in tech in 2025",
      desc: "Are you looking to break into the tech industry in 2025? Whether you're starting from scratch or looking to pivot your career, there has never been a better time to enter the world of technology. In this post, we’ll walk you through the essential steps, from choosing the right skills to learning through hands-on projects and navigating the job market. Get ready to embark on your journey into one of the fastest-growing and most rewarding industries today!",
      date: "Jan 18th, 2025",
      Info: "Recently read",
    },
    {
      id: 3,
      title: "How to get started in tech in 2025",
      desc: "Are you looking to break into the tech industry in 2025? Whether you're starting from scratch or looking to pivot your career, there has never been a better time to enter the world of technology. In this post, we’ll walk you through the essential steps, from choosing the right skills to learning through hands-on projects and navigating the job market. Get ready to embark on your journey into one of the fastest-growing and most rewarding industries today!",
      date: "Jan 18th, 2025",
      Info: "Recently read",
    },
    {
      id: 4,
      title: "How to get started in tech in 2025",
      desc: "Are you looking to break into the tech industry in 2025? Whether you're starting from scratch or looking to pivot your career, there has never been a better time to enter the world of technology. In this post, we’ll walk you through the essential steps, from choosing the right skills to learning through hands-on projects and navigating the job market. Get ready to embark on your journey into one of the fastest-growing and most rewarding industries today!",
      date: "Jan 18th, 2025",
      Info: "Recently read",
    },
    {
      id: 5,
      title: "How to get started in tech in 2025",
      desc: "Are you looking to break into the tech industry in 2025? Whether you're starting from scratch or looking to pivot your career, there has never been a better time to enter the world of technology. In this post, we’ll walk you through the essential steps, from choosing the right skills to learning through hands-on projects and navigating the job market. Get ready to embark on your journey into one of the fastest-growing and most rewarding industries today!",
      date: "Jan 18th, 2025",
      Info: "Recently read",
    },
    {
      id: 6,
      title: "How to get started in tech in 2025",
      desc: "Are you looking to break into the tech industry in 2025? Whether you're starting from scratch or looking to pivot your career, there has never been a better time to enter the world of technology. In this post, we’ll walk you through the essential steps, from choosing the right skills to learning through hands-on projects and navigating the job market. Get ready to embark on your journey into one of the fastest-growing and most rewarding industries today!",
      date: "Jan 18th, 2025",
      Info: "Recently read",
    },
  ];
  // the get request and the total post of the entire blog would display here.

  return (
    <>
      <h5 className="text-[#01473e] border-l-[#01473e] border-l-2 pl-2 my-6">
        Recent Blogs
      </h5>
      <section className="grid grid-cols-3 gap-4">
        {BlogPost.map(({ id, title, Info, date, desc }) => (
          <div
            className="blogs_one bg-white p-2 shadow-lg mt-4 rounded-[3px]"
            key={id}
          >
            <div className="blogs_img">
              <Link to={`/blog/${id}`}>
                <img src={thumbnail} alt="" className="rounded-[5px]" />
              </Link>
            </div>
            <div className="blogs_text">
              <h6 className="text-[14px] text-[#01473e]">{title}</h6>
              <p className="text-[13px] pb-4 pr-2">
                {desc.length > 150 ? desc.substring(0, 150) + "..." : desc}
              </p>
              <p className="text-[12px] text-[#01473e] font-bold flex flex-row justify-between items-center">
                <span>{Info}</span>
                <span>{date}</span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

// the sidebar informatin component
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
      id: 2,
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
        <div className="blogs_one bg-white p-2 shadow-lg mt-4 rounded-[3px]">
          {/* <div className="blogs_img">
            <img src={thumbnail} alt="" className="rounded-[5px]" />
          </div> */}
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
