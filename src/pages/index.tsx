import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "@/components/layout/Layout"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>hello</h1>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
