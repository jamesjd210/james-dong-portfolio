import Image from "next/image";
import React from "react";

export default function Home() {
  const Intro : React.FC = () => {
    return (
      <section className="bg-background py-12">
        <div className="mx-auto text-center max-w-3xl">
          <h1 className="text-3xl font-bold text-brown-700 md:text-4xl lg:text-5xl ">
            Hey there! My name is <br/> James Dong
          </h1>
          <p className="mt-4 text-lg text-brown-500 md:text-xl">
            Welcome to my website! I'm a passionate developer with a love for creating stunning web applications.
          </p>
        </div>
      </section>
    );
  };

  const ProjectPreviews : React.FC = () => {
    return (
      <section className="py-12">
        <h2 className="text-2xl font-semibold text-brown-700 text-center">Featured Projects</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-tan-500 p-6 rounded-lg shadow-lg">
            <Image src="/project1.jpg" alt="Project 1" width={500} height={300} className="rounded-md"/>
            <h3 className="mt-4 text-xl font-semibold text-deepBlue-500">Project Name</h3>
            <p className="mt-2 text-brown-500">Brief description of the project and the technologies used.</p>
          </div>
          <div className="bg-tan-500 p-6 rounded-lg shadow-lg">
            <Image src="/project2.jpg" alt="Project 2" width={500} height={300} className="rounded-md"/>
            <h3 className="mt-4 text-xl font-semibold text-deepBlue-500">Project Name</h3>
            <p className="mt-2 text-brown-500">Brief description of the project and the technologies used.</p>
          </div>
          <div className="bg-tan-500 p-6 rounded-lg shadow-lg">
            <Image src="/project3.jpg" alt="Project 3" width={500} height={300} className="rounded-md"/>
            <h3 className="mt-4 text-xl font-semibold text-deepBlue-500">Project Name</h3>
            <p className="mt-2 text-brown-500">Brief description of the project and the technologies used.</p>
          </div>
        </div>
      </section>

    );
  };

  return (
    <>
      <Intro/>
      <ProjectPreviews/>
    </>
  );
}
