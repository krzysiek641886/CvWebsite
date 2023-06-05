import PositionPrinter from "../Components/PositionPrinter";
import voluntaryServiceList from "../Assets/Text/Input/voluntary_service_list.json";

function VoluntaryService() {
    return (
        <div id="voluntary-service-page">
            <h1 className="section-title">Voluntary Service</h1>
            <div>
                {voluntaryServiceList.jobs.map((item, index) => (
                    <div key={index}>{PositionPrinter(item)}</div>
                ))}
            </div>
        </div>
    );
}

export default VoluntaryService;
