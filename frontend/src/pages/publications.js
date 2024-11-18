import React from "react";
import Layout from "../components/Layout";
import MultimediaHome from "../components/Multimedia/MultimediaHome"; // Import MultimediaHome
import { graphql, Link } from "gatsby";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import { HiOutlineDownload } from "react-icons/hi"; // Import download icon
import latestPublicationImage from "../assets/images/alg-2023.png"; // Replace with actual image

const PublicationsComponent = ({ data }) => {
  const publicationArticles = data.allPrismicBlogPosts.nodes;

  if (!publicationArticles || publicationArticles.length === 0) {
    return <p className="text-center text-gray-600">No publications available.</p>;
  }

  // Latest publication for hero section
  const latestPublication = publicationArticles[0];
  // Other publications
  const otherPublications = publicationArticles.slice(1, 6);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[#1d8f92] text-white">
        {/* Full-width background with aligned content */}
        <div className="bg-[#545456]">
          <div className="container mx-auto flex justify-between items-center px-6 lg:px-20 py-2">
            <span className="text-sm font-bold text-white">
              {latestPublication.data.categories[0]?.category || "Publication"}
            </span>
            <a
              href="/path/to/publication.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-1 bg-[#1d8f92] text-white font-medium rounded hover:bg-white hover:text-[#1d8f92] transition-transform duration-300 transform hover:scale-105"
            >
              <HiOutlineDownload />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 lg:px-20 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-2">
                <p className="text-sm font-medium text-[#f6941e]">Our Latest Publications</p>
                <hr className="border-t border-gray-300 w-[270px] animate-slide-in" />
                <p className="text-sm">{latestPublication.data.publish_date}</p>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold leading-snug">
                {latestPublication.data.title}
              </h1>
              {/* Compact Download Button */}
              <a
                href="/path/to/publication.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-2 py-1 bg-[#f6941e] text-white font-medium rounded hover:bg-[#1d8f92] transition-transform duration-300 transform hover:scale-105"
                style={{ maxWidth: "116px" }}
              >
                <HiOutlineDownload />
                <span>Download</span>
              </a>
              <p className="text-base text-gray-200 leading-relaxed">
                This report delves into groundbreaking insights and transformative ideas,
                offering actionable recommendations for meaningful change. Stay informed
                and explore key findings shaping critical discussions today.
              </p>
              {/* Social Share Section */}
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-300">Share Publication:</span>
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon
                    size={32}
                    round
                    className="hover:scale-110 transition-transform duration-300"
                    style={{ fill: "white", backgroundColor: "transparent" }}
                  />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl}>
                  <TwitterIcon
                    size={32}
                    round
                    className="hover:scale-110 transition-transform duration-300"
                    style={{ fill: "white", backgroundColor: "transparent" }}
                  />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <LinkedinIcon
                    size={32}
                    round
                    className="hover:scale-110 transition-transform duration-300"
                    style={{ fill: "white", backgroundColor: "transparent" }}
                  />
                </LinkedinShareButton>
                <WhatsappShareButton url={shareUrl}>
                  <WhatsappIcon
                    size={32}
                    round
                    className="hover:scale-110 transition-transform duration-300"
                    style={{ fill: "white", backgroundColor: "transparent" }}
                  />
                </WhatsappShareButton>
              </div>
            </div>
            {/* Right Image */}
            <div>
              <img
                src={latestPublicationImage}
                alt="Latest Publication"
                className="w-full max-w-sm h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <div className="container mx-auto px-6 lg:px-20 py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore</h2>
        <p className="text-lg text-gray-600 mb-6">
          Explore a curated collection of thought-provoking publications that reflect the
          LéO Africa Institute’s commitment to advancing transformative ideas and fostering
          impactful change. Dive into these expertly crafted works to uncover
          innovative perspectives and actionable recommendations designed to shape a brighter,
          more inclusive future.
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

      {/* Multimedia Section */}
      <div className="container mx-auto px-6 lg:px-20 py-10">
        <MultimediaHome data={data} />
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
