import React from "react";
import { Helmet } from "react-helmet";
import Image from "../images/logo.svg";

interface SeoProps {
  title?: string;
  description?: string;
  author?: string;
  image?: string;
  pathName?: string;
  keywords?: string[];
}

function Seo({
  title = "AcceleratoApp",
  description = "AcceleratorApp Innovation Community - Tools and community to facilitate innovation between all members of our community",
  author = "AcceleratoApp",
  image=Image,
  pathName='/',
  keywords = ['AcceleratoApp', 'Startup', 'Incubator'],
}: SeoProps) {
  const allKeywords = keywords.map((keyword: string) => `"${keyword}"`);

  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <meta name="keywords" content={allKeywords.toString()} />
      <meta name="author" content={author} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <link rel="canonical" href={pathName} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={pathName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default Seo;
