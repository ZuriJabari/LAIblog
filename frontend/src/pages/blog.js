import React from "react"
import { graphql, Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import HeroSection from "../components/HeroSection"
import Footer from "../components/Footer"

const BlogList = ({ data }) => {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto p-4">
        {data.allPrismicBlogPosts.nodes.map(blog => (
          <div key={blog.id} className="mb-8 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">
                <Link to={`/blog/${blog.uid}`} className="hover:underline">
                  {blog.data.title.text}
                </Link>
              </h2>
              <div className="mt-4 text-gray-700">
                {RichText.render(blog.data.content.raw)}
              </div>
              <p className="mt-4 text-sm text-gray-500">
                By {blog.data.author ? blog.data.author.text : 'Unknown'} on {blog.data.date}
              </p>
              {blog.data.cover_image.url && (
                <img
                  src={blog.data.cover_image.url}
                  alt={blog.data.title.text}
                  className="w-full h-auto mt-4 rounded-lg"
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query {
    allPrismicBlogPosts {
      nodes {
        id
        uid
        data {
          title {
            text
          }
          content {
            raw
          }
          author {
            text
          }
          date
          cover_image {
            url
          }
        }
      }
    }
  }
`

export default BlogList