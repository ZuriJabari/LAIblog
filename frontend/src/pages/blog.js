import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import Bloghero from "../assets/images/hero2.jpg";

const BlogList = ({ data }) => {
  const blogs = data.allPrismicBlogPosts.nodes;

  if (!blogs || blogs.length === 0) {
    return <p className="text-center text-gray-600">No blogs available.</p>;
  }

  // Split blogs into featured (top 2) and others (next 3)
  const featuredBlogs = blogs.slice(0, 2);
  const otherBlogs = blogs.slice(2, 5);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${Bloghero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-center h-full">
          <div className="container mx-auto px-6 lg:px-20">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
              Blog & Insights
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-3xl leading-relaxed">
              Discover inspiring stories, thought-provoking insights, and the
              latest updates shaping our journey toward positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blogs Section */}
      <div className="container mx-auto px-6 lg:px-20 py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Blogs</h2>
        <p className="text-lg text-gray-600 mb-6">
          A showcase of our most impactful stories and articles that capture the 
          essence of our vision and values.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {featuredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Link to={`/blog/${blog.uid}`}>
                {blog.data.featured_image?.url && (
                  <img
                    src={blog.data.featured_image.url}
                    alt={blog.data.title}
                    className="w-full h-64 object-cover"
                  />
                )}
              </Link>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  <Link to={`/blog/${blog.uid}`} className="hover:underline">
                    {blog.data.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  Published on {blog.data.publish_date} by{" "}
                  {blog.data.author || "Unknown"}
                </p>
                {/* Categories */}
                {blog.data.categories?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.data.categories.map((category, index) => (
                      <Link
                        to={`/${category.category.toLowerCase()}`}
                        key={index}
                        className="px-3 py-1 text-sm font-medium text-white bg-[#f6941e] rounded-full hover:bg-[#1d8f92] transition-colors"
                      >
                        {category.category}
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  to={`/blog/${blog.uid}`}
                  className="mt-4 inline-block text-[#1e8e92] font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Other Blogs Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">More Blogs</h2>
        <p className="text-lg text-gray-600 mb-6">
          Dive deeper into a wide range of topics and insights that shape our 
          journey and inspire change.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Link to={`/blog/${blog.uid}`}>
                {blog.data.featured_image?.url && (
                  <img
                    src={blog.data.featured_image.url}
                    alt={blog.data.title}
                    className="w-full h-48 object-cover"
                  />
                )}
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  <Link to={`/blog/${blog.uid}`} className="hover:text-[#1e8e92] transition-colors">
                    {blog.data.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  Published on {blog.data.publish_date} by{" "}
                  {blog.data.author || "Unknown"}
                </p>
                {/* Categories */}
                {blog.data.categories?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.data.categories.map((category, index) => (
                      <Link
                        to={`/${category.category.toLowerCase()}`}
                        key={index}
                        className="px-3 py-1 text-sm font-medium text-white bg-[#1d8f92] rounded-full hover:bg-[#f6941e] transition-colors"
                      >
                        {category.category}
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  to={`/blog/${blog.uid}`}
                  className="mt-4 inline-block text-[#1e8e92] font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allPrismicBlogPosts(
      filter: { data: { categories: { elemMatch: { category: { eq: "Blog" } } } } }
      sort: { fields: data___publish_date, order: DESC }
    ) {
      nodes {
        id
        uid
        data {
          title
          publish_date
          author
          featured_image {
            url
          }
          categories {
            category
          }
        }
      }
    }
  }
`;

export default BlogList;
