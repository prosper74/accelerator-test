import * as React from "react"
import type { HeadFC } from "gatsby";
import Showcase from "components/Showcase";
import Adverts from "components/Adverts";
import Services from "components/Services";

const IndexPage = () => {
  return (
    <>
      <Showcase />
      <Adverts />
      <Services />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
