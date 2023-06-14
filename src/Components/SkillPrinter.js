import "./SkillPrinter.css";
import React, { useState } from "react";

function PrintReferences({ references }) {
    return (
        <div id="references">
            <h4>References:</h4>
            {references.map((ref, index) => (
                <div key={index}>
                    <a className="hyperlink" href={ref.url}>
                        {ref.title}
                    </a>
                </div>
            ))}
        </div>
    );
}

function IndividualSkillPrinter({ skill, skill_index }) {
    return (
        <div key={skill_index}>
            <h4>Description:</h4>
            <p>{skill.description}</p>
            {skill.projects && <h4>Projects:</h4>}
            {skill.projects &&
                skill.projects.map((project, index) => (
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
    const [activeItem, setActiveItem] = useState(null);
    return (
        <div className="skill-category" key={category.category_name}>
            <h2 className="category-name">{category.category_name}</h2>
            {category.items.map((skill, skill_index) => (
                <div
                    className={`accordion-item ${
                        activeItem === skill_index ? "active" : ""
                    }`}
                    key={skill_index}
                    onClick={() => {
                        activeItem !== skill_index
                            ? setActiveItem(skill_index)
                            : setActiveItem(-1);
                    }}
                >
                    <h3 className="accordion-title">{skill.skill_name}</h3>
                    {activeItem === skill_index && (
                        <div className="accordion-content">
                            <IndividualSkillPrinter
                                skill={skill}
                                key={skill_index}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default SkillsPrinter;
