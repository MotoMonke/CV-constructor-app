import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import "./styles/CV.css"
export default function CV({cvData}) {
    const educationList = cvData.education.map(education=>(
        <li key={education.id}>
            {education.degree}
            <div className="school-name">{education.school}</div>
        </li>
    ));
    const experience = cvData.experience.map(experience=>(
        <li key={experience.id}>
            <div className="position">{experience.position}</div>
            {experience.company && <div className="company">{experience.company}</div>}
            {experience.duration && <div className="duration">{experience.duration}</div>}
            <div className="description">
                <ul>
                    {experience.description.split("• ").filter(Boolean).map((line,idx)=>(
                        <li key={idx}>{line}</li>
                    ))}
                </ul>
            </div>
        </li>
    ));
    const skills = cvData.skills.map(item=>(
        <li key={item.id}>{item.skill}</li>
    ))
    //react-to-print
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });
    return (
        <>
            <div className="resume" ref={contentRef}>
                <section className="display-personal-info">
                    <div className="name">{cvData.name}</div>
                    <div className="email">{cvData.email}</div>
                    <div className="phone">{cvData.phone}</div>
                    <div className="linkedIn">{cvData.linkedIn}</div>
                </section>
                <section className="display-experience">
                    <h2>Experience</h2>
                    <ul>{experience}</ul>
                </section>
                <section className="display-education">
                    <h2>Education</h2>
                    <ul>{educationList}</ul>
                </section>
                <section className="display-skills">
                    <h2>Skills</h2>
                    <ul>{skills}</ul>
                </section>
            </div>
            <div className="print-save-btn">
                <button onClick={reactToPrintFn}>Print</button>
            </div>
        </>
    );
}
