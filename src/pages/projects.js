import React from "react"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import Head from "../components/head"


function Projects(props) {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects(sort: { updatedAt: DESC }) {
        edges {
          node {
            projectTitle
            techStack
            projectDescription
            projectsLink
            githublink
            projectImage {
              gatsbyImage(width: 470, height: 300)
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Projects" />
      <div className="flex flex-col justify-between py-20 mb-auto w-full h-auto">
    
      <div className="flex flex-col justify-center text-center mt-20" data-aos="fade-up" data-aos-delay="500">
        <h1 className="text-[5rem] font-bold tracking-wider" >MY WORKS</h1>
        <h3 className='text-[1.9rem] font-bold'>
          These are my recent fun projects.
        </h3>
        <p className='text-xl'>
          I always put my learning things into practice. These projects
          demonstrates my learning outcome.
        </p>
      </div>
      <hr />
      <br />
      <ul className='flex flex-col'>
        {data.allContentfulProjects.edges.map((edge) => {
          return (
            <li className='mb-[2rem] border-solid border-2 border-navy rounded-xl flex flex-row p-[2rem]' data-aos="fade-up" data-aos-delay="500">
              <div>
                <GatsbyImage
                  className='w-[400px] h-[250px] mr-[3rem]'
                  image={edge.node.projectImage.gatsbyImage}
                  alt="project img"
                />
              </div>
              <div className='flex flex-col'>
                <h4 className="text-2xl font-bold mb-4" >{edge.node.projectTitle}</h4>
                <p className="text-md font-normal mb-2">{edge.node.projectDescription}</p>
                <h5 className='mb-[1rem] font-semibold'>
                  Tech Stack : {edge.node.techStack}
                </h5>
                <div className='flex flex-row'>
                  <Link
                    external
                    to={edge.node.githublink}
                    target="_blank"
                    className='text-light bg-sky text-white p-1 px-3 rounded-lg hover:bg-white hover:text-sky border-2 border-solid'
                  >
                    GitHub
                  </Link>
                  <Link
                    external
                    to={edge.node.projectsLink}
                    target="_blank"
                    className='text-light bg-sky text-white p-1 px-3 rounded-lg hover:bg-white hover:text-sky border-2 border-solid'
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
          
      </div>
    </Layout>
  )
}

export default Projects
