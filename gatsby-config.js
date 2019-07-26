module.exports = {
    siteMetadata: {
        title: `Podróżniczki`,
        description: `Personal site with all my travels.`,
        author: `@chemikpil`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-typescript`
    ]
}
