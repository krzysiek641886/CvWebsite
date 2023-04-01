function PrintReferences(references) {
  return (
    <div id references>
      {references.map((ref) => (
        <div>
          <a href={ref.url}>{ref.title}</a>
        </div>
      ))}
    </div>
  );
}

function SkillPrinter(params) {
  return (
    <div>
      <h3>{params.skill_name}</h3>
      <p>{params.description}</p>
      {params.projects.map((project, index) => (
        <div key={index}>
          <p>{project.title}</p>
          <p>{project.description}</p>
          {project.references ? PrintReferences(project.references) : null}
        </div>
      ))}
    </div>
  );
}

export default SkillPrinter;
