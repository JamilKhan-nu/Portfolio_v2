import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import picture from "../assets/profile.jpg";
import Head from "../components/head";
import { GatsbyImage } from "gatsby-plugin-image";

function About() {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbout {
        aboutMe {
          raw
        }
      }
      allContentfulEducation(sort: { session: DESC }) {
        edges {
          node {
            universityName
            courseName
            session
          }
        }
      }
      
      
    }
  `);

  return (
    <Layout>
      <Head title="About" />
      <div className="flex flex-col justify-between  mb-40 w-full h-auto">
      <div className="mt-40 gap-5 flex flex-row justify-between">
        <div className="flex flex-col w-1/4 h-auto bg-white  p-2 rounded-lg" data-aos="fade-right" data-aos-delay="500">
          <img src={picture} alt="Profile" />
          <h1 className="mt-6 text-5xl tracking-[2rem]  uppercase font-bold">
            Jamil{" "}
            <span className="text-8xl tracking-wide uppercase text-coffee font-bold">
              Khan
            </span>
          </h1>
          <h1 className=" mb-6 text-lg tracking-[0.25rem]  uppercase font-bold">
            SOFTWARE ENGINEER
          </h1>

          <h1 className=" mb-4 text-lg   uppercase font-bold border-b-4 border-coffee">
            Contacts
          </h1>

          <p className="text-lg">
            <span className="text-2xl mr-3">📞</span> +44789*****4
          </p>
          <p className="text-lg">
            <span className="text-2xl mr-3">📧</span> jamilkhan.nu@gmail.com
          </p>
          <p className="text-lg">
            <span className="text-2xl mr-3">🏠</span> London, UK
          </p>
        </div>
        <div className="flex flex-col justify-end  w-auto h-auto">
          <div >
            <h1 className="text-5xl bg-white flex justify-center py-2 rounded-lg font-bold tracking-wider" data-aos="fade-down" data-aos-delay="400">
              Hey there.
              <br />
              Nice to meet you.
            </h1>
            <div className="bg-white my-3 p-5 rounded-lg" data-aos="fade-up" data-aos-delay="500">
              <h1 className="pb-2 text-2xl uppercase font-semibold tracking-widest">
                Profile
              </h1>
              <hr />
              <p className="pt-2">
                {documentToReactComponents(
                  JSON.parse(data.contentfulAbout.aboutMe.raw)
                )}
              </p>
            </div>
            <div className="w-[55rem] h-[50rem] py-5 rounded-lg bg-white" data-aos="fade-up" data-aos-delay="500">
            <h1 className=" pb-12 flex justify-center text-2xl uppercase font-semibold tracking-widest">
                My Stacks
              </h1>
              <ul className="flex flex-row relative overflow-x-hidden">
                
              </ul>
            </div>
          </div>
          <h1 className="pt-5 pb-2 text-2xl uppercase font-semibold tracking-widest" data-aos="fade-up" data-aos-delay="500">
            Education
          </h1>
          <div className="flex flex-row" data-aos="fade-up" data-aos-delay="500">
            {data.allContentfulEducation.edges.map((edge) => {
              return (
                <ol class="border-l border-navy dark:border-navy md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
                  <li>
                    <div class="flex-start flex items-center pt-2 md:block md:pt-0">
                      <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-navy dark:bg-navy md:-mt-[5px] md:ml-0 md:mr-0"></div>
                      <p class="mt-2 text-sm font-light text-navy dark:text-navy">
                        {edge.node.session}
                      </p>
                    </div>
                    <div class="ml-4 mt-2 pb-5 md:ml-0 ">
                      <h4 class="mb-1.5 text-lg font-semibold">
                        {edge.node.courseName}
                      </h4>
                      <p class="mb-3 text-navy dark:text-navy">
                        {edge.node.universityName}
                        lorema asddasfj asdfljlkj asdfljkl asdflkj asdflj
                      </p>
                    </div>
                  </li>
                </ol>
              );
            })}
          </div>
          <div>
            <h1>Education</h1>
            <p>details of education</p>
          </div>
        </div>
      </div>   
      </div>
    </Layout>
  );
}

export default About;
