import SectionWrapper from "../layout/SectionWrapper";
import Badge from "../ui/Badge";
import { SKILLS } from "../../constants/skills";
const Skills = () => (
  <SectionWrapper id="skills">
    <h2 className="font-display text-5xl text-white mb-10">Skills</h2>
    <div className="flex flex-wrap gap-3">
      {SKILLS.map((s) => <Badge key={s}>{s}</Badge>)}
    </div>
  </SectionWrapper>
);
export default Skills;
