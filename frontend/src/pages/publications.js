import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";

const PublicationsComponent = ({ data }) => {
  const publicationArticles = data.allPrismicBlogPosts.nodes;

  if (!publicationArticles || publicationArticles.length === 0) {
    return <p className="text-center text-gray-600">No publications available.</p>;
  }

  // Split publications into featured (top 2) and others (next 3)
  const featuredPublications = publicationArticles.slice(0, 2);
  const otherPublications = publicationArticles.slice(2, 5);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-[#1d8f92] via-[#f6941e] to-[#1d8f92] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center h-full">
          <div className="container mx-auto px-6 lg:px-20">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
              Publications
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-3xl leading-relaxed">
              Dive into our collection of insightful publications, reports, and research 
              shaping the narrative for impactful change.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Publications Section */}
      <div className="container mx-auto px-6 lg:px-20 py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Publications</h2>
        <p className="text-lg text-gray-600 mb-6">
          Explore our most prominent and recent publications that highlight our work and impact.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {featuredPublications.map((article) => (
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
                  Published on {article.data.publish_date}
                </p>
                {/* Categories with Links */}
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

        {/* Other Publications Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">More Publications</h2>
        <p className="text-lg text-gray-600 mb-6">
          Discover more publications that delve deeper into a variety of critical topics and insights.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPublications.map((article) => (
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
                  Published on {article.data.publish_date}
                </p>
                {/* Categories with Links */}
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
      filter: { data: { categories: { elemMatch: { category: { eq: "Publications" } } } } }
      sort: { fields: data___publish_date, order: DESC }
    ) {
      nodes {
        id
        uid
        data {
          title
          publish_date
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

export default PublicationsComponent;
