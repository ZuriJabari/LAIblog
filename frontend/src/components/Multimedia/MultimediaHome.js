import React from "react";
import { Link } from "gatsby";

const MultimediaHome = ({ data }) => {
  const multimediaItems = data?.allPrismicBlogPosts?.nodes || [];
  const featuredItem = multimediaItems[0]; // The first item as featured
  const otherItems = multimediaItems.slice(1); // The rest as cards

  if (multimediaItems.length === 0) {
    return <p className="text-center text-gray-600">No multimedia items available.</p>;
  }

  return (
    <section className="container mx-auto px-6 lg:px-20 py-10">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Latest Updates</h2>
      <p className="text-lg text-gray-600 mb-10">
        Explore a curated selection of our most recent multimedia content, offering insights, 
        stories, and impactful updates.
      </p>

      {/* Featured Section */}
      {featuredItem && (
        <div className="relative bg-white shadow-xl rounded-lg overflow-hidden mb-12 group">
          <Link to={`/blog/${featuredItem.uid}`}>
            {featuredItem.data.featured_image?.url && (
              <img
                src={featuredItem.data.featured_image.url}
                alt={featuredItem.data.title || "Featured Article"}
                className="w-full h-80 object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            )}
          </Link>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
          <div className="absolute bottom-6 left-6 z-10 text-white space-y-4">
            <h3 className="text-3xl font-bold">
              <Link to={`/blog/${featuredItem.uid}`} className="hover:underline">
                {featuredItem.data.title}
              </Link>
            </h3>
            <p className="text-sm text-gray-300">
              Published on {featuredItem.data.publish_date} by{" "}
              {featuredItem.data.author || "Unknown"}
            </p>
            <Link
              to={`/blog/${featuredItem.uid}`}
              className="inline-block bg-[#f6941e] text-white py-2 px-6 rounded-full font-semibold uppercase hover:bg-[#fff] hover:text-[#f6941e] transition-transform transform hover:scale-105"
            >
              Read More →
            </Link>
          </div>
        </div>
      )}

      {/* Other Items Section */}
      <h3 className="text-3xl font-bold text-gray-800 mb-6">More Insights</h3>
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
                  alt={item.data.title || "Article"}
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
