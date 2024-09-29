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
  return (
    <>
      <Intro/>
    </>
  );
}
