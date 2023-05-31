import SkillPrinter from "../Components/SkillPrinter";
import skillList from "../Assets/Text/Input/skills_list.json";

function Skills() {
    return (
        <div>
            <div>
                <h1 className="section-title">Skills</h1>
            </div>
            <div>
                {skillList.skills.map((category) => (
                    <div key={category.category_name}>
                        <h2>{category.category_name}</h2>
                        {category.items.map((skill, skill_index) => (
                            <div key={skill_index}>{SkillPrinter(skill)}</div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
