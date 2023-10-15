import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage } from "gatsby-plugin-image"
import Head from "../components/head"

function Book() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBooks(sort: { updatedAt: DESC }) {
        edges {
          node {
            bookTitle
            author
            date(formatString: "MMMM Do, YYYY")
            type
            slug
            summary
            bookCover {
              gatsbyImage(fit: COVER, height: 250, width: 180, layout: FIXED)
            }
          }
        }
      }
      contentfulBooks {
        bookTitle
        author
        type
        summary
        bookCover {
          gatsbyImage(height: 400, width: 300)
        }
      }

      contentfulBookHeading {
        heading
        mainText {
          raw
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Book" />
      <div className="flex flex-col justify-between py-20 mb-auto w-full h-auto">
        <h1
          className="flex justify-center uppercase pt-20 pb-10 text-3xl font-bold "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          WELCOME To my Digital Bookshelf
        </h1>
        <div className="flex flex-row w-full gap-5 h-auto">
          
          <div className="w-3/4 h-auto bg-white mx-2 py-5" data-aos="fade-up" data-aos-delay="500">
          <h1 className="flex justify-center mb-4 text-lg   uppercase font-bold border-b-4 border-coffee" data-aos="fade-up" data-aos-delay="500">
                  Recent Finished Book
                </h1>
                <div
                className=" flex flex-row justify-between"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <ul className="flex flex-row flex-wrap">
                {data.allContentfulBooks.edges.map((edge) => {
                  return (
                    <li>
                      <div className="flex flex-col justify-start w-60 h-80 rounded-lg bg-white m-4 ">
                      <GatsbyImage
                        className="self-center rounded-lg mt-4 w-48 h-72"
                        image={edge.node.bookCover.gatsbyImage}
                        alt="Book Cover"
                      />
                      <div className="flex justify-center">
                        <Link
                          className=" text-light bg-sky text-white p-1 px-3 rounded-xl  hover:bg-white hover:text-sky border-2 border-solid flex justify-center mt-2"
                          to={`/book/${edge.node.slug}`}
                        >
                          View Note
                        </Link>
                      </div>
                    </div>
                    </li>
                    
                  );
                })}
                </ul>
                
              </div>
      </div>
      <div className="w-1/4 h-auto bg-white "
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="flex flex-col mx-2 py-5">
            <h1 className="flex justify-center mb-4 text-lg   uppercase font-bold border-b-4 border-coffee" >
                  Currently Reading Book
                </h1>
            <GatsbyImage
                  className="m-3 rounded-xl border-2 border-navy border-solid "
                  image={data.contentfulBooks.bookCover.gatsbyImage}
                  alt="Currently reading book cover"
                />
                
                <h1 className="px-3 flex justify-center text-xl  font-bold ">
                  {data.contentfulBooks.bookTitle}
                </h1>
                <p className="px-3 text-md font-bold ">
                  by {data.contentfulBooks.author}
                </p>
                <p className="px-3 mt-3 text-md font-light ">{data.contentfulBooks.type}</p>
              <div >
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}

export default Book
