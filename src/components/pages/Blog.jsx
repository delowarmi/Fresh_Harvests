import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=9") // ব্লগ API
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white pt-24">
      <div className="max-w-[1320px] mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">📝 Latest Blog Posts</h2>

        {/* লোডিং স্পিনার */}
        {loading ? (
          <div className="text-center text-orange-600 text-lg font-semibold">Loading Blogs...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="border rounded-lg p-4 shadow-md">
                <img
                  src={`https://picsum.photos/300/200?random=${blog.id}`} // র‍্যান্ডম ইমেজ
                  alt={blog.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="font-semibold mt-2">{blog.title}</h3>
                <p className="text-gray-600 mt-1">
                  {blog.body.length > 100 ? blog.body.substring(0, 100) + "..." : blog.body}
                </p>
                <button className="mt-2 bg-orange-600 text-white px-4 py-1 rounded-md w-full">
                  Read More
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
