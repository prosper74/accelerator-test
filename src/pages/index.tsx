import * as React from "react";
import type { HeadFC } from "gatsby";
import Seo from "components/Seo";
import Showcase from "components/Showcase";
import Charts from "components/Charts";
import Services from "components/Services";

const IndexPage = () => {
  return (
    <>
      <Seo />
      <Showcase />
      <Charts />
      <Services />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
