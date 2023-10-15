import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage } from "gatsby-plugin-image"
import Head from "../components/head"
import PageWithComments from "./PageWithComments"

export const query = graphql`
  query ($slug: String!) {
    contentfulBooks(slug: { eq: $slug }) {
      bookTitle
      author
      date(formatString: "MMMM Do, YYYY")
      type
      bookCover {
        gatsbyImage(fit: COVER, height: 250, width: 180, layout: FIXED)
      }
      slug
      summary
      notes {
        raw
      }
    }
  }
`

const Book = (props) => {
  return (
    <Layout>
      <Head title={props.data.contentfulBooks.bookTitle} />
      <div>
        <div>
          <GatsbyImage
            image={props.data.contentfulBooks.bookCover.gatsbyImage}
            alt="book cover"
          />
        </div>
        <div>
          <h3>
            {props.data.contentfulBooks.bookTitle}
          </h3>
          <h5>
            Author: {props.data.contentfulBooks.author}
          </h5>
          <h6>
            Type: {props.data.contentfulBooks.type}
          </h6>
          <p>
            Date Read: {props.data.contentfulBooks.date}
          </p>
          <p>
            
            {props.data.contentfulBooks.summary}
          </p>
        </div>
      </div>
      <hr />
      <br />
      <div>
        {documentToReactComponents(
          JSON.parse(props.data.contentfulBooks.notes.raw)
        )}
      </div>
      <PageWithComments />
    </Layout>
  )
}

export default Book
