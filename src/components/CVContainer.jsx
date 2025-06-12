import CV from "./CV";
import Constructor from "./Constructor";
import { useState } from "react";
import "./styles/CVContainer.css"
export default function CVContainer() {
    const [cvData, setCvData] = useState({
        name: "",
        email: "",
        phone: "",
        linkedIn:"",
        education: [],
        experience: [],
        skills: [],
    });
    return (
        <div className="cv-builder">
            <Constructor cvData={cvData} setCvData={setCvData}/>
            <CV cvData={cvData}/>
        </div>
    );
}