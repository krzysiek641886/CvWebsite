import SkillsPrinter from "../Components/SkillPrinter";
import skillList from "../Assets/Text/Input/skills_list.json";

function Skills() {
    return (
        <div id="skills-page">
            <h1 className="section-title">Skills</h1>
            {skillList.skills.map((category, index) => (
                <SkillsPrinter category={category} key={index}/>
            ))}
        </div>
    );
}

export default Skills;
