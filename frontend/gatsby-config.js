module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `leoafrica`, // Replace with your Prismic repository name
        accessToken: `MC5aemlRVFJNQUFDRUEwWjVy.OO-_ve-_vVrvv71d77-9fu-_vUc_LO-_ve-_vTE077-977-9C--_ve-_vUEq77-977-977-977-9MO-_ve-_ve-_vTM`, // If your repository is private, add your access token
        schemas: {
          blog_posts: require('./src/schemas/blog_posts.json'), // Update to the correct schema file
        },
      },
    },
  ],
};