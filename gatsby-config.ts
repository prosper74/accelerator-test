import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "features",
        path: `${__dirname}/src/images/features`,
        __key: "features",
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'testimonials',
        path: `./src/images/testimonials`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        "components": path.join(__dirname, "src/components"),
        "pages": path.join(__dirname, 'src/pages'),
        "styles": path.join(__dirname, "src/styles"),
        "images": path.join(__dirname, "src/images"),
      }
    }
  ],
};

export default config;
