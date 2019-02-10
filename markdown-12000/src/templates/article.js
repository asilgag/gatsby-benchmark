import React from "react"
import Layout from "../components/layout"

export default ({pageContext}) => {
  const post = pageContext.node
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <ul>
          <li>{post.frontmatter.date}</li>
          <li>{post.frontmatter.date_human}</li>
          <li>{post.frontmatter.draft}</li>
          <li>{post.frontmatter.type}</li>
          <li>{post.frontmatter.taxonomy_term}</li>
          <li>{post.frontmatter.subheadline}</li>
          <li>{post.frontmatter.author}</li>
          <li>{post.frontmatter.image_name}</li>
          <li>{post.frontmatter.image_credit}</li>
          <li>{post.frontmatter.image_caption}</li>
        </ul>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}


