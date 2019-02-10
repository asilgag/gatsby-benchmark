/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Json`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }

}


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  return graphql(`
  {
    allJson {
      edges {
        node {
          fields{
            slug
          }
          data {
            id,
            type,
            attributes {
              title
              created
              changed
              promote
              sticky
              default_langcode
              revision_translation_affected
              field_author
              field_computed_alias
              field_display_video_explorer
              field_distribution_created_time
              field_hub_page_exclude
              field_is_evergreen
              field_media_type
              field_metatags
              field_ng_uuid
              field_original_uri
              field_promo_title
              field_publish_date
              field_rendered_body
              field_right_rail_schedule_card
              field_sub_headline
              field_use_video_card
            }
          }
          id
        }
      }
    }
    }
  `
).then(result => {
  result.data.allJson.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        post: node
      },
    })
  })
  })
}

