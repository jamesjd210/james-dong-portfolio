// src/pages/projects.tsx
import Image from "next/image";
import { Project } from "@/types/Project";

type ProjectsPageProps = {
  projects: Project[];
  count: number;
};

export default function ProjectHighlights({ projects, count }: ProjectsPageProps) {
  return (
    <section className="py-12">
        <h2 className="text-2xl font-semibold text-brown-700 text-center">Featured Projects</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {projects.slice(0,count).map((project) => (
              <div key={project.id} className="bg-tan-500 p-6 rounded-lg shadow-lg">
                <Image 
                  src={project.imageUrl || "/static/pictures/default.jpg"} // Use default image if `imageUrl` is missing
                  alt={project.name}
                  width={500}
                  height={300}
                  className="rounded-md"
                />
                <h3 className="mt-4 text-xl font-semibold text-deepBlue-500">
                  {project.name}
                </h3>
                <p className="mt-2 text-brown-500">
                  {project.description}
                </p>
              </div>
            ))}
        </div>
    </section>
  );
}
