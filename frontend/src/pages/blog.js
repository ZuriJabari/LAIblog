import React from "react"
import Layout from "../components/Layout"
import HeroSection from "../components/HeroSection"
import Objectives from "../components/Objectives"
import { OurHistory } from "../components/about/OurHistory"
import { MissionVision } from "../components/about/MissionVision"
import { TheTeam } from "../components/about/TheTeam"
import { OurPartners } from "../components/about/OurPartners"
import { AwardsAccolades } from "../components/about/AwardsAccolades"
import { FAQ } from "../components/about/FAQ"
import SubscriptionForm from "../components/SubscriptionForm"
import { graphql, Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import Bloghero from "../assets/images/hero2.jpg"

const BlogList = ({ data }) => {
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
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 transform transition duration-500 ease-in-out hover:scale-105">
              News & Media
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-3xl leading-relaxed mb-6 opacity-90 hover:opacity-100 transform transition duration-500 ease-in-out hover:translate-x-2">
              Stories, insights, and multimedia content that inspire thought
              leadership and action. Explore updates on our initiatives,
              reflections from Fellows, impactful articles, videos, podcasts,
              and publications highlighting our work in shaping Africa's
              narrative. Stay informed about our events, partnerships, and
              voices driving positive change across the continent. Dive into
              the stories and resources that define our mission for a better,
              inclusive Africa.
            </p>
            <div className="flex">
              <Link
                to="#latest-blogs"
                className="inline-flex items-center bg-transparent border-2 border-white text-white py-2 px-4 rounded-full text-lg font-semibold transform transition duration-500 ease-in-out hover:bg-white hover:text-black hover:scale-110"
              >
                Explore Stories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto p-4">
        {data.allPrismicBlogPosts.nodes.map(blog => (
          <div key={blog.id} className="mb-8 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">
                <Link to={`/blog/${blog.uid}`} className="hover:underline">
                  {blog.data.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500">By {blog.data.author || "Unknown"} on {blog.data.publish_date}</p>
              {blog.data.featured_image.url && (
                <img src={blog.data.featured_image.url} alt={blog.data.title} className="w-full h-auto mt-4 rounded-lg" />
              )}
              <div className="mt-4 text-gray-700">
                {blog.data.excerpt}
              </div>
              <div className="mt-4 text-gray-700">
                {RichText.render(blog.data.content.raw)}
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold">Categories</h3>
                <ul>
                  {blog.data.categories.map((category, index) => (
                    <li key={index} className="text-sm text-gray-500">{category.category || "Uncategorized"}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold">Tags</h3>
                <ul>
                  {blog.data.tags.map((tag, index) => (
                    <li key={index} className="text-sm text-gray-500">{tag.tag || "Untagged"}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Objectives />
      <OurHistory />
      <MissionVision />
      <TheTeam />
      <OurPartners />
      <AwardsAccolades />
      <FAQ />
      <SubscriptionForm />
    </Layout>
  )
}

export const query = graphql`
  query {
    allPrismicBlogPosts(filter: { uid: { ne: null } }) {
      nodes {
        id
        uid
        data {
          title
          author
          publish_date
          excerpt
          featured_image {
            url
          }
          content {
            raw
          }
          categories {
            category
          }
          tags {
            tag
          }
        }
      }
    }
  }
`

export default BlogList