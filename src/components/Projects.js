import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Love to create native apps using Swift, or web apps / experiences using React. I know my way around a backend as well, preferably using PHP.
          </p>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        {projects.map((project) => (
          <a
            href={project.link}
            key={project.image}
          <img class="w-full" src={project.image} alt="gallery"/>
          <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{project.title}</div>
          <p class="text-gray-700 text-base">
          {project.description}
          </p>
          </div>
          <div class="px-6 pt-4 pb-2">
          {project.skills.map((skill) => (
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{skill}</span>
          ))}
          </div>
          </a>
          ))}
        </div>



    </div>
    </section>

  );
}
