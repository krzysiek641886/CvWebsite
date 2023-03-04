import JobPrinter from "../Components/JobPrinter";
import { useState, useEffect } from "react";
import positionsList from "../Assets/Text/voluntary_service_list.json" 

function VoluntaryWork() {
  return (
    <div className="Homepage">
      <div>Voluntary Service</div>
      <div>
        {positionsList.jobs.map((item, index) => (
          <div key={index}>
            {JobPrinter(item)}
          </div>
        ))}
		</div>
    </div>
  );
}

export default VoluntaryWork;
