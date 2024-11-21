// src/pages/searchResults.js
import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

const SearchResults = ({ data, location }) => {
  const searchQuery = new URLSearchParams(location.search).get("query")
  const results = data.allPrismicBlogPosts.nodes.filter(blog =>
    blog.data.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Search Results for "{searchQuery}"</h1>
        {results.length > 0 ? (
          results.map(blog => (
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
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-600">No results found.</p>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allPrismicBlogPosts {
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
        }
      }
    }
  }
`

export default SearchResults