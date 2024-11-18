import React from "react";
import { Link } from "gatsby";

const MultimediaHome = ({ data }) => {
  const multimediaItems = data?.allPrismicBlogPosts?.nodes || [];
  const featuredItems = multimediaItems.slice(0, 2); // First 2 items
  const otherItems = multimediaItems.slice(2, 5); // Next 3 items

  if (multimediaItems.length === 0) {
    return <p className="text-center text-gray-600">No multimedia items available.</p>;
  }

  return (
    <section className="container mx-auto px-6 lg:px-20 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Updates</h2>
      <p className="text-lg text-gray-600 mb-8">
        Explore a curated selection of our most recent multimedia content, offering insights, 
        stories, and impactful updates.
      </p>

      {/* Featured Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
          >
            <Link to={`/blog/${item.uid}`}>
              {item.data.featured_image?.url && (
                <img
                  src={item.data.featured_image.url}
                  alt={item.data.title}
                  className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
              )}
            </Link>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                <Link to={`/blog/${item.uid}`} className="hover:underline">
                  {item.data.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Published on {item.data.publish_date} by{" "}
                {item.data.author || "Unknown"}
              </p>
              {item.data.categories?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.data.categories.map((category, index) => (
                    <Link
                      to={`/category/${category.category.toLowerCase()}`}
                      key={index}
                      className="px-3 py-1 text-sm font-medium text-white bg-[#f6941e] rounded-full hover:bg-[#1d8f92] transition-colors"
                    >
                      {category.category}
                    </Link>
                  ))}
                </div>
              )}
              <Link
                to={`/blog/${item.uid}`}
                className="mt-4 inline-block text-[#1e8e92] font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Other Items Section */}
      <h3 className="text-2xl font-bold text-gray-800 mb-2">More Insights</h3>
      <p className="text-lg text-gray-600 mb-6">
        Browse through a variety of multimedia resources that provide insights and inspiration 
        across all categories.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <Link to={`/blog/${item.uid}`}>
              {item.data.featured_image?.url && (
                <img
                  src={item.data.featured_image.url}
                  alt={item.data.title}
                  className="w-full h-48 object-cover"
                />
              )}
            </Link>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                <Link to={`/blog/${item.uid}`} className="hover:underline">
                  {item.data.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Published on {item.data.publish_date} by{" "}
                {item.data.author || "Unknown"}
              </p>
              {item.data.categories?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.data.categories.map((category, index) => (
                    <Link
                      to={`/category/${category.category.toLowerCase()}`}
                      key={index}
                      className="px-3 py-1 text-sm font-medium text-white bg-[#1d8f92] rounded-full hover:bg-[#f6941e] transition-colors"
                    >
                      {category.category}
                    </Link>
                  ))}
                </div>
              )}
              <Link
                to={`/blog/${item.uid}`}
                className="mt-2 inline-block text-[#1e8e92] font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MultimediaHome;
