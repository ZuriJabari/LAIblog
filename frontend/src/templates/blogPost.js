import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import Layout from "../components/Layout";
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

const BlogPage = ({ data }) => {
  const blog = data.prismicBlogPosts.data;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  // State for progress bar
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const articleElement = document.getElementById("article-content");
      if (articleElement) {
        const { top, height } = articleElement.getBoundingClientRect();
        const scrollHeight = window.innerHeight;
        const percentage = Math.min(Math.max((scrollHeight - top) / height, 0), 1);
        setProgress(percentage * 100); // Convert to percentage
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate Read Time
  const calculateReadTime = (text) => {
    const wordsPerMinute = 200; // Average reading speed
    const words = text.split(/\s+/).length; // Count words in text
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  const plainTextContent = RichText.asText(blog.content.raw); // Convert RichText to plain text
  const readTime = calculateReadTime(plainTextContent);

  return (
    <Layout>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 z-50 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-[#f6911e] to-[#1e8e92] transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="h-[70vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 lg:px-20 bg-black bg-opacity-80 text-white">
          <div className="flex items-center mb-4">
            {blog.author_picture?.url && (
              <img
                src={blog.author_picture.url}
                alt={blog.author || "Author"}
                className="w-16 h-16 rounded-full mr-4"
              />
            )}
            <p className="text-sm text-gray-300">
              By <span className="font-semibold">{blog.author || "Unknown"}</span> | {blog.publish_date} |{" "}
              <span className="font-semibold">{blog.categories?.[0]?.category || "Uncategorized"}</span>
            </p>
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 hover:scale-105 transition-transform duration-500">
            {blog.title}
          </h1>
          <p className="text-lg lg:text-xl italic text-gray-300 mb-6 leading-relaxed">
            {RichText.asText(blog.introduction.raw)}
          </p>
          <p className="text-base text-gray-400 mb-6">{blog.excerpt}</p>
          <div className="flex items-center space-x-4">
            <span className="text-base font-semibold">Share this article:</span>
            <FacebookShareButton url={shareUrl} quote={blog.title}>
              <FacebookIcon size={40} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={blog.title}>
              <TwitterIcon size={40} round />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon size={40} round />
            </LinkedinShareButton>
            <WhatsappShareButton url={shareUrl} title={blog.title}>
              <WhatsappIcon size={40} round />
            </WhatsappShareButton>
          </div>
          <div className="mt-4">
            <Link
              to="/blog"
              className="text-sm text-[#f6911e] hover:text-white flex items-center group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 group-hover:animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to News & Media
            </Link>
          </div>
        </div>
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: `url(${blog.featured_image?.url || ""})`,
          }}
        ></div>
      </section>

      {/* Content Area */}
      <article
        id="article-content"
        className="container mx-auto px-6 lg:px-20 py-10 flex flex-col lg:flex-row gap-12"
      >
        {/* Main Content */}
        <div className="flex-1">
          {/* Read Time */}
          <p className="text-sm text-gray-500 mb-4">⏱ {readTime} min read</p>

          {/* Content */}
          <div className="space-y-8 text-xl text-gray-800 leading-relaxed [&_a]:text-[#1e8e92] [&_a]:underline">
            {RichText.render(blog.content.raw)}
          </div>

          {/* Multimedia Section */}
          {blog.multimedia?.map((media, index) => (
            <div key={index} className="mt-6">
              {media.media_type === "image" && media.media_file?.url && (
                <>
                  <img
                    src={media.media_file.url}
                    alt={media.caption || "Story Image"}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  {media.caption && (
                    <p className="text-sm text-gray-500 mt-2 text-center">{media.caption}</p>
                  )}
                </>
              )}
              {media.media_type === "video" && media.media_file?.url && (
                <video controls className="w-full h-auto rounded-lg shadow-md">
                  <source src={media.media_file.url} type="video/mp4" />
                </video>
              )}
              {media.media_type === "audio" && media.media_file?.url && (
                <audio controls className="w-full">
                  <source src={media.media_file.url} type="audio/mpeg" />
                </audio>
              )}
            </div>
          ))}

          {/* Quotes Section */}
          {blog.quotes?.length > 0 && (
            <section className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Quotes</h3>
              {blog.quotes.map((quote, index) => (
                <blockquote
                  key={index}
                  className="italic text-lg text-gray-600 border-l-4 border-gray-300 pl-4 mb-6"
                >
                  <p className="mb-2">"{quote.quote_text}"</p>
                  <footer className="text-sm text-gray-500">- {quote.quote_author}</footer>
                </blockquote>
              ))}
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 lg:sticky lg:top-20 h-fit bg-gray-50 rounded-lg shadow-md p-6">
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <FacebookShareButton url={shareUrl} quote={blog.title}>
                <FacebookIcon size={40} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={blog.title}>
                <TwitterIcon size={40} round />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={40} round />
              </LinkedinShareButton>
              <WhatsappShareButton url={shareUrl} title={blog.title}>
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>
            </div>
          </section>
          {blog.tags?.length > 0 && (
            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm font-medium bg-gray-200 text-gray-700 rounded-full"
                  >
                    {tag.tag}
                  </span>
                ))}
              </div>
            </section>
          )}
        </aside>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    prismicBlogPosts(id: { eq: $id }) {
      data {
        title
        author
        author_picture {
          url
        }
        publish_date
        excerpt
        featured_image {
          url
        }
        introduction {
          raw
        }
        content {
          raw
        }
        multimedia {
          media_type
          media_file {
            url
          }
          caption
        }
        quotes {
          quote_text
          quote_author
        }
        tags {
          tag
        }
      }
    }
  }
`;

export default BlogPage;
