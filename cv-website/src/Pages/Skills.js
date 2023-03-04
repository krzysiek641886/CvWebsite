import SkillPrinter from "../Components/SkillPrinter";
import skillList from "../Assets/Text/Input/skills_list.json" 

function Education() {
  return (
    <div className="Homepage">
      <div>Skills</div>
      <div>
        {skillList.skills.map((item, index) => (
          <div key={index}>
            {SkillPrinter(item)}
          </div>
        ))}
		</div>
    </div>
  );
}

export default Education;
