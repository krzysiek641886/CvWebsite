import PositionPrinter from "../Components/PositionPrinter";
import educationList from "../Assets/Text/Input/education_list.json";

function Education() {
    return (
        <div  id="education-page">
            <h1 className="section-title">Education</h1>
            <div>
                {educationList.education.map((item, index) => (
                    <div key={index}>{PositionPrinter(item)}</div>
                ))}
            </div>
        </div>
    );
}

export default Education;
