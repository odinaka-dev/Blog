import React from "react";

const TextEditor = () => {
  return (
    <section className="max-w-[90%] mx-auto">
      <EditorForm />
    </section>
  );
};

const EditorForm = () => {
  // the post method would be written here to the backend

  // the test or any other useState method
  return (
    <section className="max-w-[50%] mx-auto">
      <h2 className="text-[#01473e] text-[24px] text-center my-4">
        Create New Blog
      </h2>
      <form action="" className="flex flex-col">
        <p></p>
        {/* title of the blog - input */}
        <input
          type="text"
          placeholder="Title of the blog"
          className="text-black border border-gray-500 border-[1px] p-2 rounded-lg mb-4 cursor-pointer"
        />
        {/* image of the blog - input */}
        <input
          type="file"
          className="text-black border border-gray-500 border-[1px] p-2 rounded-lg mb-4 cursor-pointer"
        />
        {/* the description/excerpt or the blog itself - textarea*/}
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Content of the blog"
          className="text-black border border-gray-500 border-[1px] p-2 rounded-lg mb-4 cursor-pointer"
        ></textarea>
        {/* the name of the author - input */}
        <input
          type="text"
          placeholder="Author's name"
          className="text-black border border-gray-500 border-[1px] p-2 rounded-lg mb-4 cursor-pointer"
        />
        {/* How many minutes read is the blog - selection */}
        <div className="grid grid-cols-2 gap-8 items-center">
          <select name="" id="" className="cursor-pointer text-[12px]">
            <option value="">1 Minutes above</option>
            <option value="">10 Minutes above</option>
            <option value="">30 Minutes above</option>
            <option value="">1hour+</option>
          </select>
          <select name="" id="" className="cursor-pointer text-[12px]">
            <option value="">Category</option>
            <option value="">Education</option>
            <option value="">Articles</option>
            <option value="">Blogs</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default TextEditor;
