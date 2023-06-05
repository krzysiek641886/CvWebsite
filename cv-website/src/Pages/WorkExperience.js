import PositionPrinter from "../Components/PositionPrinter";
import jobsList from "../Assets/Text/Input/jobs_list.json";

function WorkExperience() {
    return (
        <div id="work-page">
            <h1 className="section-title">Work Experience</h1>
            <div>
                {jobsList.jobs.map((item, index) => (
                    <div key={index}>{PositionPrinter(item)}</div>
                ))}
            </div>
        </div>
    );
}

export default WorkExperience;
