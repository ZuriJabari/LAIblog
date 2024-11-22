import React from "react";
import { Link } from "gatsby";

const MultimediaHome = ({ data }) => {
  const multimediaItems = data?.allPrismicBlogPosts?.nodes || [];
  const featuredItem = multimediaItems[0]; // The first item as featured
  const otherItems = multimediaItems.slice(1, 7); // The next 6 items for More Insights

  if (multimediaItems.length === 0) {
    return <p className="text-center text-gray-600">No multimedia items available.</p>;
  }

  return (
    <section className="container mx-auto px-6 lg:px-20 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-gray-800">Featured</h2>
        <Link
          to="/blog"
          className="text-[#1d8f92] font-semibold hover:underline"
        >
          View All Insights →
        </Link>
      </div>
      <p className="text-lg text-gray-600 mb-10">
        Discover our latest multimedia content, stories, and impactful updates.
      </p>

      {/* Featured Item Section */}
      {featuredItem && (
        <div className="relative bg-white shadow-xl rounded-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6 p-6 lg:p-10">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium bg-[#f6941e] text-white px-3 py-1 rounded-full">
                  Featured
                </span>
                {featuredItem.data.categories?.length > 0 && (
                  <span className="text-sm font-medium bg-[#1d8f92] text-white px-3 py-1 rounded-full">
                    {featuredItem.data.categories[0].category}
                  </span>
                )}
              </div>
              <p className="text-gray-500 text-sm">
                Published on {featuredItem.data.publish_date} by{" "}
                {featuredItem.data.author || "Unknown"}
              </p>
              <h3 className="text-4xl font-extrabold leading-tight text-gray-800">
                <Link to={`/blog/${featuredItem.uid}`} className="hover:underline">
                  {featuredItem.data.title}
                </Link>
              </h3>
              <p className="text-lg text-gray-600">{featuredItem.data.excerpt}</p>
              <Link
                to={`/blog/${featuredItem.uid}`}
                className="inline-block bg-[#1d8f92] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#f6941e] transition-all duration-300"
              >
                Read More →
              </Link>
            </div>

            {/* Right: Image */}
            <div className="relative h-80 lg:h-full rounded-lg overflow-hidden shadow-lg">
              <img
                src={featuredItem.data.featured_image.url}
                alt={featuredItem.data.featured_image.alt || featuredItem.data.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      )}

      {/* More Insights Section */}
      <h3 className="text-3xl font-bold text-gray-800 mb-6">More Insights</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Link to={`/blog/${item.uid}`}>
              {item.data.featured_image?.url && (
                <img
                  src={item.data.featured_image.url}
                  alt={item.data.title || "Article"}
                  className="w-full h-48 object-cover"
                />
              )}
            </Link>
            <div className="p-4">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                <Link to={`/blog/${item.uid}`} className="hover:underline">
                  {item.data.title}
                </Link>
              </h4>
              <p className="text-sm text-gray-500 mb-2">
                Published on {item.data.publish_date} by{" "}
                {item.data.author || "Unknown"}
              </p>
              {item.data.categories?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.data.categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium text-white bg-[#1d8f92] rounded-full hover:bg-[#f6941e] transition-colors"
                    >
                      {category.category}
                    </span>
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

      {/* View More Link */}
      {multimediaItems.length > 7 && (
        <div className="text-right mt-8">
          <Link
            to="/blog"
            className="text-[#1d8f92] font-semibold hover:underline"
          >
            View More →
          </Link>
        </div>
      )}
    </section>
  );
};

export default MultimediaHome;
