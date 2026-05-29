import SectionWrapper from "../layout/SectionWrapper";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../constants/projects";
const Projects = () => (
  <SectionWrapper id="projects">
    <h2 className="font-display text-5xl text-white mb-12">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {PROJECTS.map((p) => <ProjectCard key={p.title} {...p} />)}
    </div>
  </SectionWrapper>
);
export default Projects;
