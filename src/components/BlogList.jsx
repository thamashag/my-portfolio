import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BlogImage1 from "../assets/blog1.jpeg";
import BlogImage2 from "../assets/blog2.jpeg";
import BlogImage3 from "../assets/blog3.jpeg";
import ProfilePic from "../assets/about3.jpeg"; // Add your profile picture here

const BlogList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      image: BlogImage1,
      title: "Understanding Recursion in C",
      description:
        "An introduction to recursion in C with examples and insights.",
      link: "/articles/recursion",
      date: "October 30, 2024",
    },
    {
      image: BlogImage2,
      title: "Building Microservices",
      description:
        "An in-depth insight into designing and deploying microservices, with best practices.",
      link: "/articles/microservices",
      date: "October 25, 2024",
    },
    {
      image: BlogImage3,
      title: "Exploring Kubernetes",
      description:
        "Using Kubernetes for scaling and managing distributed systems.",
      link: "/articles/kubernetes",
      date: "October 20, 2024",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#37afe1] py-16 px-4">
      <div className="max-w-[1100px] mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white uppercase">
          All Blog Articles
        </h1>
        <p className="text-white text-base md:text-lg mt-4">
          Browse through all articles and tutorials.
        </p>
      </div>

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
              <div className="flex items-center mt-4">
                <img
                  src={ProfilePic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Thamasha Galahena
                  </p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
                <span className="text-sm text-gray-500 ml-auto">
                  7 min read
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
