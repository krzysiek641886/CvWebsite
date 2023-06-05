import SkillsPrinter from "../Components/SkillPrinter";
import skillList from "../Assets/Text/Input/skills_list.json";

function Skills() {
    return (
        <div>
            <div>
                <h1 className="section-title">Skills</h1>
            </div>
            {skillList.skills.map((category) => (
                <SkillsPrinter category={category} />
            ))}
        </div>
    );
}

export default Skills;
