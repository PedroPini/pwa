require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Pedro Pini`,
    // Default title of the page
    siteTitleAlt: `Pedro - @pamp178`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Pedro - @pamp178`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://piniped.com`,
    // Used for SEO
    siteDescription: `My Personal portfolio for photos, where I am take, landscape, street, protrait and so on.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    siteAboutMe: `TESTETET`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,

    // Twitter Handle
    author: `@pamp178`,

  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `Pedro Pini`,
        location: `Australia`,
          socialMedia: [
            {
              title: `Instagram`,
              href: `https://www.instagram.com/pamp178`,
              // LEMBRAR DE ACHAR UMA SOLUCAO target: `_blank`
            },
            {
              title: `Site`,
              href: `http://pedropini.me`,
              // LEMBRAR DE ACHAR UMA SOLUCAO target: `_blank`
            }
          ],
          showThemeAuthor: false,
          tooglemode:true,

      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emilia - @lekoarts/gatsby-theme-emilia`,
        short_name: `Emilia`,
        description: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
