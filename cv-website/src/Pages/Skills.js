import SkillPrinter from "../Components/SkillPrinter";
import skillList from "../Assets/Text/Input/skills_list.json" 

function Skills() {
  return (
    <div className="Homepage">
      <div>Skills</div>
      <div>
          <div key="skills">
            {SkillPrinter(skillList)}
          </div>
		</div>
    </div>
  );
}

export default Skills;
