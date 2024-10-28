import { useRouter } from 'next/router';
import React from 'react';

export default function ProjectDetailPage({ params }: { params: { project: string } }) {
  const { project } = params;
  
  // Fetch your project details based on `project` ID or name.
  const projectData = {
    title: "Example Project Title",
    description: "Detailed description of the project.",
  };

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{projectData.title}</h1>
      <p>{projectData.description}</p>
      {/* Additional content */}
    </section>
  );
}
