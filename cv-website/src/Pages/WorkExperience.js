import PositionPrinter from "../Components/PositionPrinter";
import jobsList from "../Assets/Text/Input/jobs_list.json";
import voluntaryServiceList from "../Assets/Text/Input/voluntary_service_list.json";

function WorkExperience() {
    return (
        <div className="Homepage">
            <div>
                <h1>Work Experience</h1>
            </div>
            <div>
                {jobsList.jobs.map((item, index) => (
                    <div key={index}>{PositionPrinter(item)}</div>
                ))}
            </div>
            <div>
                <h1>Voluntary Service</h1>
            </div>
            <div>
                {voluntaryServiceList.jobs.map((item, index) => (
                    <div key={index}>{PositionPrinter(item)}</div>
                ))}
            </div>
        </div>
    );
}

export default WorkExperience;
