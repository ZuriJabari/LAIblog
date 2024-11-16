const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allPrismicBlogPosts {
        nodes {
          id
          uid
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const blogPostTemplate = path.resolve(`./src/templates/blogPost.js`)

  result.data.allPrismicBlogPosts.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.uid}`,
      component: blogPostTemplate,
      context: {
        id: node.id,
        uid: node.uid,
      },
    })
  })
}