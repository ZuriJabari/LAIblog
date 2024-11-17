exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allPrismicBlogPosts {
        nodes {
          id
          uid
        }
      }
    }
  `);

  result.data.allPrismicBlogPosts.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.uid}`,
      component: require.resolve("./src/templates/blogPost.js"),
      context: {
        id: node.id, // Ensure the ID is passed here
      },
    });
  });
};
