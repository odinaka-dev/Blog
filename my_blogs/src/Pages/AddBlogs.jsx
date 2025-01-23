import React, { useState } from "react";

const EditorForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null); // Store the file object

  const handleAddPost = async (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Author:", author);
    console.log("Image:", image);

    // Create FormData to handle both text and file inputs
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("author", author);
    formData.append("image", image); // Append the file object

    try {
      const result = await fetch("http://localhost:3000/api/v1/blogs", {
        method: "POST",
        body: formData, // Use FormData as the request body
      });

      if (result.status === 201 || result.ok) {
        const data = await result.json();
        console.log("Success:", data);
      } else {
        console.error("Blog post failed:", result.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <section className="max-w-[50%] mx-auto">
      <h2 className="text-[#01473e] text-[24px] text-center my-4">
        Create New Blog
      </h2>
      <form onSubmit={handleAddPost} className="flex flex-col">
        {/* Title Input */}
        <input
          type="text"
          placeholder="Title of the blog"
          className="text-black border border-gray-500 border-[1px] p-2 rounded-lg mb-4 cursor-pointer"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Image Input */}
        <input
          type="file"
          className="text-black border border-gray-500 border-[1px] p-2 rounded-lg mb-4 cursor-pointer"
          onChange={(e) => setImage(e.target.files[0])} // Use e.target.files[0]
        />

        {/* Description Textarea */}
        <textarea
          placeholder="Content of the blog"
          className="text-black border border-gray-500 border-[1px] p-2 rounded-lg mb-4 cursor-pointer"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {/* Author Input */}
        <input
          type="text"
          placeholder="Author's name"
          className="text-black border border-gray-500 border-[1px] p-2 rounded-lg mb-4 cursor-pointer"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        {/* Submit Button */}
        <input
          type="submit"
          value="Submit"
          className="bg-[#01473e] text-white p-2 rounded-lg mt-8 cursor-pointer text-base hover:text-white hover:bg-red-900 duration-500"
        />
      </form>
    </section>
  );
};

export default EditorForm;
