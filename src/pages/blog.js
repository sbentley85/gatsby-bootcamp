import React from "react"
import BlogLayout from '../components/blog-layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss';
import Head from '../components/head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (
      sort: {
        fields:publishedDate,
        order:DESC
      }
    ) {
      edges {
        node {
          title
          slug
          publishedDate(fromNow:true)
        }
      }
    }
  }

  `)
  
  return (
    <BlogLayout>
      <Head title="Blog"/>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
             </li>
          )
        })}
      </ol>
      
    </BlogLayout>
  )
}

export default BlogPage;  
