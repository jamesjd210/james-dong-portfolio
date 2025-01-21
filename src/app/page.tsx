import React from "react";
import { Project } from "@/types/Project"
import { loadProjects } from "@/utils/loadProjects"; // function to load projects
import ProjectHighlights from "@/components/ProjectHighlights";

export default function Home() {
  function getProjects() {
    const projects : Project[] = loadProjects();
    return projects
  }
  
  const Intro : React.FC = () => {
    return (
      <section className="bg-background py-12">
        <div className="mx-auto text-center max-w-3xl">
          <h1 className="text-3xl font-bold text-brown-700 md:text-4xl lg:text-5xl ">
            Hey there! My name is <br/> James Dong
          </h1>
          <h2 className="text-3xl font-bold">
            ATTENTION: This site is still in construction. Thanks!
          </h2>
          <p className="mt-4 text-lg text-brown-500 md:text-xl">
            Welcome to my website! I&apos;m a passionate developer with a love for creating fully functional web applications.
          </p>
        </div>
      </section>
    );
  };  

  return (
    <>
      <Intro/>
      <ProjectHighlights projects={getProjects()} count={3}/>
    </>
  );
}
