import Ajv from "ajv";
import education_list from "../Assets/Text/Input/education_list.json";
import jobs_list from "../Assets/Text/Input/jobs_list.json";
import voluntary_service_list from "../Assets/Text/Input/voluntary_service_list.json";
import education_list_schema from "../Assets/Text/Schemas/education_list_schema.json";
import prof_voluntary_jobs_schema from "../Assets/Text/Schemas/prof_voluntary_jobs_schema.json";
import contact_data from "../Assets/Text/Input/contact_data.json";
import contact_data_schema from "../Assets/Text/Schemas/contact_data_schema.json";
import skills_list from "../Assets/Text/Input/skills_list.json";
import skills_list_schema from "../Assets/Text/Schemas/skills_list_schema.json";

function SchemaValidator() {
    const ajv = new Ajv();
    const validate_education_list = ajv.compile(education_list_schema);
    if (!validate_education_list(education_list)) {
        throw new Error("Schema validation of input json files failed.");
    }
    const validate_jobs_list = ajv.compile(prof_voluntary_jobs_schema);
    if (!validate_jobs_list(jobs_list)) {
        throw new Error("Failed to validate jobs_list");
    }
    const validate_voluntary_jobs = ajv.compile(prof_voluntary_jobs_schema);
    if (!validate_voluntary_jobs(voluntary_service_list)) {
        throw new Error("Failed to validate voluntary_service_list");
    }
    const validate_skills_list_schema = ajv.compile(skills_list_schema);
    if (!validate_skills_list_schema(skills_list)) {
        throw new Error("Failed to validate skills_list");
    }
    const validate_contact_data_schema = ajv.compile(contact_data_schema);
    if (!validate_contact_data_schema(contact_data)) {
        throw new Error("Failed to validate contact_data");
    }
    return true;
}

export default SchemaValidator;
