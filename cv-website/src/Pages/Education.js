import PositionPrinter from "../Components/PositionPrinter";
import educationList from "../Assets/Text/Input/education_list.json";

function Education() {
    return (
        <div className="Homepage">
            <h1>Education</h1>
            <div>
                {educationList.education.map((item, index) => (
                    <div key={index}>{PositionPrinter(item)}</div>
                ))}
            </div>
        </div>
    );
}

export default Education;
