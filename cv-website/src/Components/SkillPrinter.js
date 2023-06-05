import "./SkillPrinter.css";
import React, { useState } from "react";

function PrintReferences({ references }) {
    return (
        <div id references>
            <h4>References:</h4>
            {references.map((ref) => (
                <div>
                    <a href={ref.url}>{ref.title}</a>
                </div>
            ))}
        </div>
    );
}

function IndividualSkillPrinter({ skill }) {
    return (
        <div className="single-skill">
            <h2>{skill.skill_name}</h2>
            <p>{skill.description}</p>
            <h4>Projects:</h4>
            {skill.projects.map((project, index) => (
                <div key={index}>
                    <p>{project.title}</p>
                    <p>{project.description}</p>
                    {project.references && (
                        <PrintReferences references={project.references} />
                    )}
                </div>
            ))}
        </div>
    );
}

function SkillsPrinter({ category }) {
    console.log(category);
    const [activeItem, setActiveItem] = useState(null);
    return (
        <div key={category.category_name}>
            <h2>{category.category_name}</h2>
            {category.items.map((skill, skill_index) => (
                <div key={skill_index}>
                    <div
                        className={`accordion-item ${
                            activeItem === skill_index ? "active" : ""
                        }`}
                        onClick={() => setActiveItem(skill_index)}
                    >
                        <h3 className="accordion-title">{skill.skill_name}</h3>
                        {activeItem === skill_index && (
                            <div className="accordion-content">
                                <IndividualSkillPrinter skill={skill} />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkillsPrinter;
