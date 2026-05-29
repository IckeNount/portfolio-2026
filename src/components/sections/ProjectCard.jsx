import Tag from "../ui/Tag";
const ProjectCard = ({ title, description, tags = [], link = "#" }) => (
  <a href={link} target="_blank" rel="noreferrer"
    className="group block p-6 rounded-2xl border border-white/10 hover:border-accent/40 bg-white/5 hover:bg-white/10 transition-all duration-300">
    <h3 className="font-display text-2xl text-white mb-3 group-hover:text-accent transition-colors">{title}</h3>
    <p className="text-white/50 text-sm leading-relaxed mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">{tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
  </a>
);
export default ProjectCard;
