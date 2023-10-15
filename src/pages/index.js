import * as React from "react";
import Layout from "../components/layout";
// import * as indexStyles from "../styles/index.module.css";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import carton from "../assets/profileCarton.png";
import Head from "../components/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects(limit: 8, sort: { createdAt: DESC }) {
        edges {
          node {
            projectTitle
            techStack
            projectDescription
            projectsLink
            githublink
            tag
            projectImage {
              gatsbyImage(fit: COVER, width: 470, height: 300)
            }
          }
        }
      }
      allContentfulBooks(limit: 4, sort: { updatedAt: DESC }) {
        edges {
          node {
            slug
            author
            bookTitle
            bookCover {
              gatsbyImage(fit: COVER, height: 250, layout: FIXED)
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
      allContentfulBlog(limit: 3) {
        edges {
          node {
            slug
            publishedData(formatString: "MMMM Do, YYYY")
            title
            blogImage {
              gatsbyImage(height: 700, width: 800)
            }
          }
        }
      }
      allContentfulFeatureBlog(sort: { updatedAt: DESC }) {
        edges {
          node {
            featureBlogTitle
            publishedDate(formatString: "MMMM Do, YYYY")
            slug
            featureBlogBody {
              raw
            }
            featureBlogImage {
              gatsbyImage(width: 800, height: 700)
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Home" />
      <div className="flex flex-col justify-between w-full h-auto mb-60">
      <div className="flex items-center justify-between w-full h-screen">
        <div className="w-1/2 " data-aos="fade-right" data-aos-delay="500">
          <h1 className="text-6xl leading-tight font-bold text-sky">
            Molding Ideas into Reality with the Art of
            <span className="uppercase px-3 tracking-wider text-coffee border-b-4 border-solid border-bubble-gum ">
              Code
            </span>
            and
            <span className="uppercase px-3 text-coffee border-b-4 border-solid border-bubble-gum">
              Design
            </span>
          </h1>
          <p className="pt-8 text-2xl">
            As a proficient full-stack developer, I specialize in bringing
            concepts to life through cutting-edge web applications. Dive into my
            recent{" "}
            <Link
              to="/projects"
              className=" text-bermuda border-b-2 border-solid border-bubble-gum"
            >
              projects
            </Link>
            and
            <Link
              to="/blog"
              className=" text-bermuda border-b-2 border-solid border-bubble-gum"
            >
              writings
            </Link>
            to see my mastery in React.js and web development.
          </p>
        </div>
        <div className="w-1/2 " data-aos="fade-left" data-aos-delay="500">
        <div className="flex flex-col ml-9  ">
            <h1 className="bg-white px-3 py-2 w-56 rounded-lg text-2xl">
              👋 Hi, I am <br />
              <span className="text-4xl font-bold" >
                Jamil Khan
              </span>
            </h1>
<h1 className="bg-white mt-3 px-3 py-2 w-44 rounded-lg text-lg">Software Engineer</h1>
            
          </div>
          <img
            src={carton}
            alt="profile"
            className="w-full h-auto mt-[-7rem] ml-12  "
          />
        </div>
      </div>

      {/* Project section  =========================== */}

      <div className="flex  flex-col pt-10  w-full mb-24">
        <h1
          className="flex justify-center text-4xl font-semibold pb-10 "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          My Creative
          <span className="text-coffee px-2 font-bold"> Portfolio </span>{" "}
          Section
        </h1>
        <ul className="flex flex-row flex-wrap justify-between ">
          {data.allContentfulProjects.edges.map((edge) => {
            return (
              <li
                className="w-80 h-auto bg-white rounded-lg m-4"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <GatsbyImage
                  class="m-4 rounded-lg "
                  image={edge.node.projectImage.gatsbyImage}
                  alt="project img"
                />
                <div className=" flex flex-col justify-center items-center ">
                  <p className="flex items-center rounded-lg px-3 py-1 text-sm font-light mt-[-2.3rem] relative z-10 bg-white ">
                    {edge.node.tag}
                  </p>
                  <h4 className=" text-xl font-bold mt-2 ">
                    {edge.node.projectTitle}
                  </h4>
                </div>
                <p className="flex justify-center items-center px-4 pt-2 font-light">
                  {edge.node.projectDescription}
                </p>

                <div className="flex flex-row justify-between px-4 pt-2 pb-2">
                  <Link
                    className="bg-grey px-3 py-1 rounded-lg"
                    external
                    to={edge.node.githublink}
                    target="_blank"
                  >
                    GitHub
                  </Link>
                  <Link
                    className="bg-grey px-3 py-1 rounded-lg"
                    external
                    to={edge.node.projectsLink}
                    target="_blank"
                  >
                    Demo
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
        <div
          className="flex justify-center pt-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Link
            className=" text-md font-semibold bg-sky text-white p-2.5 px-6 rounded-full hover:bg-white hover:text-sky border-2 border-solid "
            to="/blog"
          >
            See All Works
          </Link>
        </div>
      </div>

      {/*  section  =========================== */}
      {/* Feature blog section  =========================== */}
      <div className="w-full h-screen " data-aos="fade-up" data-aos-delay="500">
        <h1 className=" flex justify-center text-4xl font-semibold my-20">
          My <span className="text-coffee px-2 font-bold">Writing</span>
          Reflects My{" "}
          <span className="text-coffee px-2 font-bold">Thought</span>
        </h1>
        <div className="flex flex-row justify-between gap-8">
          <div className="w-1/2" data-aos="fade-right" data-aos-delay="700">
            {data.allContentfulFeatureBlog.edges.map((edge) => {
              return (
                <div>
                  <h1 className="my-4 text-2xl font-semibold">Featured Blog</h1>
                  <GatsbyImage
                    className="rounded-md"
                    image={edge.node.featureBlogImage.gatsbyImage}
                    alt="Featured blog image"
                  />
                  <p className="my-4 font-light ">{edge.node.publishedDate}</p>
                  <Link to={`/blog/${edge.node.slug}`}>
                    <h2 className="text-2xl my-4 font-bold">
                      {edge.node.featureBlogTitle}
                    </h2>
                  </Link>
                  <h4>
                    {documentToReactComponents(
                      JSON.parse(edge.node.featureBlogBody.raw)
                    )}
                  </h4>
                </div>
              );
            })}
          </div>
          <div
            className="w-1/2 h-screen flex flex-col justify-start gap-4 "
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="flex flex-row justify-between mt-4">
              <h1 className=" text-2xl font-medium">Recent Blogs</h1>
              <Link className=" text-light bg-sky text-white p-1 px-3 rounded-lg hover:bg-white hover:text-sky border-2 border-solid ">
                View all
              </Link>
            </div>
            {data.allContentfulBlog.edges.map((edge) => {
              return (
                <div className="flex flex-row rounded-md gap-4 bg-white p-3">
                  <GatsbyImage
                    className="w-72 h-40 rounded-lg"
                    image={edge.node.blogImage.gatsbyImage}
                    alt="Featured blog image"
                  />
                  <div>
                    <p className="font-light">{edge.node.publishedData}</p>
                    <h1 className="text-xl font-semibold">{edge.node.title}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Books section  =========================== */}
      <div className="py-20 mb-24 w-full h-screen">
        <h1
          className="flex justify-center pt-20 pb-10 text-4xl font-bold "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          My Digital Bookshelf
        </h1>
        <div className="flex flex-col w-full h-screen">
          <div
            className=" h-1/2 bg-white p-20"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex flex-row justify-center gap-48">
              <div className="flex flex-col justify-center gap-4">
                <h1 className="text-xl font-semibold text-coffee">
                  Currently Reading Book
                </h1>
                <h1 className="text-2xl font-bold">
                  {data.contentfulBooks.bookTitle}
                </h1>
                <p className="text-lg font-semibold">
                  by {data.contentfulBooks.author}
                </p>
                <p>{data.contentfulBooks.type}</p>
                <p>{data.contentfulBooks.Summary}</p>
              </div>
              <div className="">
                <GatsbyImage
                  className="w-60 h-80 rounded-lg object-contain"
                  image={data.contentfulBooks.bookCover.gatsbyImage}
                  alt="Currently reading book cover"
                />
              </div>
            </div>
          </div>
          <div className="h-1/2">
            <h1
              className="flex justify-center my-10 text-2xl font-bold text-navy"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Recent Reading list
            </h1>
            <div>
              <div
                className=" flex flex-row justify-between"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {data.allContentfulBooks.edges.map((edge) => {
                  return (
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
                  );
                })}
              </div>
            </div>
            <div
              className="flex justify-center pt-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Link
                className=" text-md font-semibold bg-sky text-white p-2.5 px-6 rounded-full hover:bg-white hover:text-sky border-2 border-solid "
                to="/blog"
              >
                View All Notes
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}
