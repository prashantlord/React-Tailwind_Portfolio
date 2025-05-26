import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Description } from "@radix-ui/react-toast";

const projects = [
  {
    id: 1,
    title: "Ecommerce Website",
    description: "Simple website created using HTML CSS and JavaScript",
    image: "/projects/project1.png",
    tags: ["HTMl", "CSS", "JS"],
    demoUrl: "https://childrenshub.netlify.app/",
    githubUrl: "https://github.com/prashantlord/Childrens_hub",
  },
  {
    id: 2,
    title: "Youtube Clone",
    description: "Youtube clone website created using basic technologies",
    image: "/projects/project2.png",
    tags: ["HTMl", "CSS", "JS"],
    demoUrl: "#",
    githubUrl: "https://github.com/prashantlord/youtube-clone",
  },
  {
    id: 1,
    title: "Portfolio Website",
    description: "Simple static, multi page, responsive portfolio website ",
    image: "/projects/project3.png",
    tags: ["HTMl", "CSS", "JS"],
    demoUrl: "https://prashant-demo.netlify.app/",
    githubUrl: "https://github.com/prashantlord/Portfolio",
  },
];
function ProjectSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4cl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of projects I worked on while exploring and mastering new
          technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer ">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden card-hover "
            >
              <div className="h-48 overflow-hidden flex object-fill">
                <img
                  src={project.image}
                  alt={project.title}
                  className="text-primary w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-semibold rounded-full bg-secondary bg-secondary text-secondary-forefround "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className=" text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {" "}
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 ">
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_black"
                    >
                      <ExternalLink />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_black"
                    >
                      <Github />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 ">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 cursor-pointer "
            href="https://github.com/prashantlord"
            target="_black"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
export default ProjectSection;
