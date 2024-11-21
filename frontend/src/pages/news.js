import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import NewsHeroImage from "../assets/images/news-hero.jpg";

const NewsComponent = ({ data }) => {
  const newsArticles = data.allPrismicBlogPosts.nodes;

  if (!newsArticles || newsArticles.length === 0) {
    return <p className="text-center text-gray-600">No news articles available.</p>;
  }

  // Split articles into featured (top 2) and others (next 3)
  const featuredNews = newsArticles.slice(0, 2);
  const otherNews = newsArticles.slice(2, 5);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${NewsHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-center h-full">
          <div className="container mx-auto px-6 lg:px-20">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
              Latest Updates from the Institute
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-3xl leading-relaxed">
              Explore recent news, announcements, and key developments from the
              Institute. Stay informed about our progress and impactful initiatives.
            </p>
          </div>
        </div>
      </section>
      <div className='prefooter-gray'></div>

      {/* Featured News Section */}
      <div className="container mx-auto px-6 lg:px-20 py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured News</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {featuredNews.map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Link to={`/blog/${article.uid}`}>
                {article.data.featured_image?.url && (
                  <img
                    src={article.data.featured_image.url}
                    alt={article.data.title}
                    className="w-full h-64 object-cover"
                  />
                )}
              </Link>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  <Link to={`/blog/${article.uid}`} className="hover:underline">
                    {article.data.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  Published on {article.data.publish_date} by{" "}
                  {article.data.author || "Unknown"}
                </p>
                {/* Categories */}
                {article.data.categories?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.data.categories.map((category, index) => (
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
                  to={`/blog/${article.uid}`}
                  className="mt-4 inline-block text-[#1e8e92] font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Other News Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">More News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherNews.map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Link to={`/blog/${article.uid}`}>
                {article.data.featured_image?.url && (
                  <img
                    src={article.data.featured_image.url}
                    alt={article.data.title}
                    className="w-full h-48 object-cover"
                  />
                )}
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  <Link
                    to={`/blog/${article.uid}`}
                    className="hover:text-[#1e8e92] transition-colors"
                  >
                    {article.data.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  Published on {article.data.publish_date} by{" "}
                  {article.data.author || "Unknown"}
                </p>
                {/* Categories */}
                {article.data.categories?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.data.categories.map((category, index) => (
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
                  to={`/blog/${article.uid}`}
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
      filter: { data: { categories: { elemMatch: { category: { eq: "News" } } } } }
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

export default NewsComponent;
