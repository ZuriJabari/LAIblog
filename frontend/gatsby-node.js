exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Fetch Blog Posts
  const blogResult = await graphql(`
    query {
      allPrismicBlogPosts {
        nodes {
          id
          uid
        }
      }
    }
  `);

  if (blogResult.errors) {
    console.error(blogResult.errors);
    throw blogResult.errors;
  }

  blogResult.data.allPrismicBlogPosts.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.uid}`,
      component: require.resolve("./src/templates/blogPost.js"),
      context: {
        id: node.id, // Pass ID to the page template
      },
    });
  });

  // Fetch Publications
  const publicationsResult = await graphql(`
    query {
      allPrismicPublications {
        nodes {
          id
          uid
        }
      }
    }
  `);

  if (publicationsResult.errors) {
    console.error(publicationsResult.errors);
    throw publicationsResult.errors;
  }

  publicationsResult.data.allPrismicPublications.nodes.forEach((node) => {
    createPage({
      path: `/publications/${node.uid}`,
      component: require.resolve("./src/templates/publication.js"), // Path to your publication page template
      context: {
        id: node.id, // Pass ID to the page template
      },
    });
  });
};
