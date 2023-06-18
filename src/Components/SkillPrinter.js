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
            <h2>Description:</h2>
            <p>{skill.description}</p>
            {skill.projects && <h2>Projects:</h2>}
            {skill.projects &&
                skill.projects.map((project, index) => (
                    <div key={index}>
                        <h3><i>{project.title}</i></h3>
                        <p>{project.description}</p>
                        {project.references && (
                            <PrintReferences references={project.references} />
                        )}
                        <hr className="projects-divider"/>
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
