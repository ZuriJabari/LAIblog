import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

const BlogPost = ({ data }) => {
  const blog = data.prismicBlogPosts.data

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{blog.title.text}</h1>
      <div>{RichText.render(blog.content.raw)}</div>
      <p className="text-sm text-gray-500">By {blog.author ? blog.author.text : 'Unknown'} on {blog.date}</p>
      {blog.cover_image.url && (
        <img src={blog.cover_image.url} alt={blog.title.text} className="w-full h-auto mt-4" />
      )}
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    prismicBlogPosts(id: { eq: $id }) {
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
`

export default BlogPost