import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BlogImage1 from "../assets/blog1.jpeg";
import BlogImage2 from "../assets/blog2.jpeg";
import BlogImage3 from "../assets/blog3.jpeg";
import ProfilePhoto from "../assets/about3.jpeg"; // Replace with your actual profile photo path

const BlogList = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      image: BlogImage1,
      title: "Understanding Recursion in C",
      description:
        "An introduction to recursion in C with examples and insights.",
      link: "/articles/recursion", // Use absolute path
      date: "October 30, 2024", // Date for the post
      readtime: "7 min read",
    },
    {
      image: BlogImage2,
      title: "Building Microservices",
      description:
        "An in-depth insight into designing and deploying microservices, with best practices.",
      link: "/articles/microservices", // Example link for another article
      date: "October 28, 2024",
      readtime: "5 min read",
    },
    {
      image: BlogImage3,
      title: "Exploring Kubernetes",
      description:
        "Using Kubernetes for scaling and managing distributed systems.",
      link: "/articles/kubernetes", // Example link for another article
      date: "October 26, 2024",
      readtime: "5 min read",
    },
    // Add more blog posts here
  ];

  return (
    <div id="blog" className="w-full min-h-screen bg-[#37afe1] py-16 px-4">
      <div className="max-w-[1100px] mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white uppercase">
          All Blog Articles
        </h1>
        <p className="text-white text-base md:text-lg mt-4">
          Browse through all articles and tutorials.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Link
            to={post.link}
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105"
          >
            <img
              className="w-full h-[300px] object-cover"
              src={post.image}
              alt={post.title}
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#4CC9FE]">
                {post.title}
              </h2>
              <p className="text-gray-700 mt-2">{post.description}</p>

              {/* Profile Photo and Meta Information */}
              <div className="flex items-center mt-4">
                <img
                  src={ProfilePhoto} // Use your profile photo
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div className="text-gray-600">
                  <p className="font-semibold">Thamasha Galahena</p>{" "}
                  {/* Your name */}
                  <p>{post.date}</p> {/* Date below the name */}
                  <p className="text-sm text-gray-500">{post.readtime}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* More Button */}
      <div className="text-center mt-12">
        <Link to="/blog-list">
          <button className="bg-white text-black w-[150px] rounded-3xl font-medium my-6 mx-auto py-3 inline-block text-center transition duration-300 ease-in-out transform hover:bg-[#FFFECD] hover:text-[#4CC9FE] hover:scale-105 z-10">
            More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
