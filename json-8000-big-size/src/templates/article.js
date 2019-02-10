import React from "react"
import Layout from "../components/layout"

export default ({pageContext}) => {
  const post = pageContext.post
  return (
    <Layout>
      <div>
      <h1>{post.data.attributes.title}</h1>
        <ul>
        <li>{post.data.attributes.drupal_internal__nid}</li>
        <li>{post.data.attributes.field_author}</li>
        <li>{post.data.attributes.field_computed_alias}</li>
        <li>{post.data.attributes.field_display_video_explorer}</li>
        <li>{post.data.attributes.field_distribution_created_time}</li>
        <li>{post.data.attributes.field_hub_page_exclude}</li>
        <li>{post.data.attributes.field_is_evergreen}</li>
        <li>{post.data.attributes.field_media_type}</li>
        <li>{post.data.attributes.field_metatags}</li>
        <li>{post.data.attributes.field_ng_uuid}</li>
        <li>{post.data.attributes.field_original_uri}</li>
        <li>{post.data.attributes.field_promo_title}</li>
        <li>{post.data.attributes.field_right_rail_schedule_card}</li>
        <li>{post.data.attributes.field_sub_headline}</li>
        </ul>
        <div dangerouslySetInnerHTML={{ __html: post.data.attributes.field_rendered_body }} />
      </div>
    </Layout>
  )
}
