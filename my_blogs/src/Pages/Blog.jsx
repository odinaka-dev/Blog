import React from "react";
import Image from "../assets/blog.avif";

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
  const date = new Date();
  return (
    <section>
      <div className="flex justify-between items-center mb-2">
        <h2 className="blog_title text-[20px] text-[#01473e] font-medium">
          How to get into tech in 2025
        </h2>
        <div className="text-[#01473e] flex items-center gap-10 font-medium cursor-pointer">
          <p>Author-Admin</p>
          <p>2 minutes Read</p>
        </div>
      </div>
      <div className="">
        <img src={Image} alt="" className="w-full rounded-lg" />
      </div>
      <p className="blog_text leading-8 my-8 text-[14px] text-left">
        How to Get Into Tech in 2025: A Practical Guide The tech industry in
        2025 offers a wide range of opportunities for people from diverse
        backgrounds. Whether you're a recent graduate, a career changer, or
        simply someone curious about tech, here’s how to dive into this dynamic
        field. 1. Define Your Goals Before jumping in, take some time to figure
        out your interests. Are you drawn to coding, designing, data analysis,
        or project management? Knowing what excites you will help narrow your
        focus. 2. Learn the Basics Start by understanding foundational tech
        skills. Popular starting points include: Programming: Learn languages
        like Python or JavaScript. Web Development: Explore HTML, CSS, and
        frameworks like React or Next.js. Data Skills: Get familiar with Excel,
        SQL, and tools like Tableau. Cloud Basics: Study platforms like AWS,
        Azure, or Google Cloud. Platforms like freeCodeCamp, Codecademy, or
        Coursera provide affordable learning paths. 3. Choose a Specialized Path
        Once you’ve learned the basics, dive deeper into a specialization. Some
        of the hottest fields in 2025 include: Artificial Intelligence and
        Machine Learning Cybersecurity UI/UX Design Blockchain Development
        Mobile App Development Each field comes with its own tools and
        certifications. For example, aspiring data scientists might focus on
        Python, while cybersecurity professionals often pursue certifications
        like CompTIA Security+ or CISSP. 4. Build Projects Hands-on experience
        is crucial. Create a portfolio by building real-world projects. For
        example: Develop a personal website. Contribute to open-source projects
        on GitHub. Create a mobile app or small game. These projects demonstrate
        your skills to potential employers. 5. Leverage Online Communities Join
        tech communities like Reddit’s r/learnprogramming, Dev.to, or
        specialized Discord servers. Networking with others can provide valuable
        advice and collaboration opportunities. 6. Seek Internships and
        Entry-Level Roles Apply for internships, apprenticeships, or junior
        positions. These roles often provide on-the-job training, helping you
        grow while earning practical experience. 7. Stay Current Tech evolves
        rapidly. Follow blogs, YouTube channels, and newsletters to stay
        informed about the latest trends. Websites like Hacker News, TechCrunch,
        and industry-specific forums are great resources. 8. Don’t Fear Career
        Changes Many successful tech professionals started in unrelated fields.
        Transferable skills, such as problem-solving, communication, or project
        management, can help you transition smoothly. Final Thoughts Breaking
        into tech in 2025 requires focus, learning, and persistence. With
        countless free resources and growing demand for talent, now is the
        perfect time to start your journey. Remember, the key to success is
        consistency—take small, deliberate steps every day, and you’ll build a
        rewarding career in tech.
      </p>
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
          <li className="">Artice</li>
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
