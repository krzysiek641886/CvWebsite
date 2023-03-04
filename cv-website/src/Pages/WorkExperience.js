import JobPrinter from "../Components/JobPrinter";
import { useState, useEffect } from "react";
import jobsList from "../Assets/Text/jobs_list.json" 

function WorkExperience() {
  return (
    <div className="Homepage">
      <div><h1>Work Experience</h1></div>
      <div>
        {jobsList.jobs.map((item, index) => (
          <div key={index}>
            {JobPrinter(item)}
          </div>
        ))}
		</div>
    </div>
  );
}

export default WorkExperience;
