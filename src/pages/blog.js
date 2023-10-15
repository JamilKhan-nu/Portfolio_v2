import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"

import Head from "../components/head"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { updatedAt: DESC }) {
        edges {
          node {
            title
            publishedData(formatString: "MMMM Do, YYYY")
            blogImage {
              gatsbyImage(width: 470, height: 300)
            }
            slug
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <div className="mt-40 mb-40 gap-5 flex flex-col justify-between">
        <div className="my-10 flex-col justify-between pb-4 border-b-2 border-solid border-coffee" data-aos="fade-up" data-aos-delay="500">
        <h1 className="text-8xl font-bold flex justify-center" data-aos="fade-up" data-aos-delay="500">WRITINGS</h1>
        <h3 className="text-xl font-semibold flex justify-center" data-aos="fade-up" data-aos-delay="500">
          For somebody who quite enjoys reading and writing, I'm not much of a
          blogger...
        </h3>
        <p className="text-md font-light flex justify-center items-center px-20" data-aos="fade-up" data-aos-delay="500">
          Here you will find irregular and occasional writings; sometimes about
          front-end web development, the technologies behind it, and the ongoing
          forward movement of web development in general.
        </p>
        </div>
        <div className="flex flex-row justify-between">
        <ol className="flex flex-row justify-between flex-wrap my-5 mx-5" data-aos="fade-up" data-aos-delay="500">
        {data.allContentfulBlog.edges.map((edge) => {
          const image = getImage(edge.node.blogImage)
          return (
            <li className="w-80 h-96 my-5 bg-white p-4 rounded-xl">
              <Link to={`/blog/${edge.node.slug}`}>
                <GatsbyImage className="rounded-lg mb-4" image={image} alt="blog image" />
                <p className="font-light">{edge.node.publishedData}</p>
                <h4 className="text-xl font-semibold">{edge.node.title}</h4>
              </Link>
            </li>
          )
        })}
      </ol>
        </div>
        
      </div>
      
      
    </Layout>
  )
}

export default Blog
