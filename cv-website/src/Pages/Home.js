import JobPrinter from "../Components/JobPrinter";
import { useState, useEffect } from "react";
import workExperience from "../Assets/Text/WorkExperience.json" 

function Home() {
  return (
    <div className="Homepage">
      <div>Home page</div>
      <div>
        {workExperience.jobs.map((item, index) => (
          <div key={index}>
            {JobPrinter(item)}
          </div>
        ))}
		</div>
    </div>
  );
}

export default Home;
