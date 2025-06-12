import { useState } from "react";
import "./styles/Constructor.css"
export default function Constructor({cvData, setCvData}) {
    //work experience
    const [position,setPosition] = useState("");
    const [company,setCompany] = useState("");
    const [duration,setDuration] = useState("");
    const [description,setDescription] = useState("");
    const handleFocus = () => {
        if(description===""){
            setDescription("• ")
        }
    }
    const handleEnter = (e) => {
        if(e.key === "Enter"){
            e.preventDefault();
            setDescription((prev)=>prev + "• ");
        }
    }
    function addWorkExp(){
        if(position&&description){
            setCvData(prevData => {
                const newWorkExp = [...prevData.experience,{id:crypto.randomUUID(),position,company,duration,description}];
                const updatedCv = {...prevData,experience:newWorkExp};
                console.log(updatedCv);
                return updatedCv;
            })
            setPosition("");
            setCompany("");
            setDuration("");
            setDescription("");
        }
    }
    //education
    const [degree, setDegree] = useState("");
    const [school, setSchool] = useState("");
    function addEducation(){
        if(degree&&school){
            setCvData(prevData => {
                const newEducation = [...prevData.education,{id:crypto.randomUUID(),degree,school}];
                const updatedCv = {...prevData,education:newEducation};
                console.log(updatedCv);
                return updatedCv;
            })
            setDegree("");
            setSchool("");
        }
    }
    //skills
    const [skill,setSkill]=useState("");
    function addSkill(){
        if(skill){
            setCvData(prevData=>{
                const newSkills=[...prevData.skills,{id:crypto.randomUUID(),skill}];
                const updatedCv={...prevData,skills:newSkills};
                console.log(updatedCv);
                return updatedCv;
            })
            setSkill("");
        }
    }
    return (
        <div className="constructor">
            <section className="enter-personal-info">
                <h2>Personal information</h2>
                <label htmlFor="name">Name:</label>
                <input value={cvData.name} id="name" onChange={e=>setCvData({...cvData,name:e.target.value})}/>
                <label htmlFor="email">Email:</label>
                <input value={cvData.email} id="email" onChange={e=>setCvData({...cvData,email:e.target.value})}/>
                <label htmlFor="phone">Phone:</label>
                <input value={cvData.phone} id="phone" onChange={e=>setCvData({...cvData,phone:e.target.value})}/>
                <label htmlFor="linkedIn">LinkedIn:</label>
                <input value={cvData.linkedIn} id="linkedIn" onChange={e=>setCvData({...cvData,linkedIn:e.target.value})}/>
            </section>
            <section>
                <h2>Work Expirience</h2>
                <label htmlFor="position">Position: </label>
                <input type="text" id="position" value={position} onChange={e=>setPosition(e.target.value)} />
                <label htmlFor="company">Company: </label>
                <input type="text" id="company" value={company} onChange={e=>setCompany(e.target.value)} />
                <label htmlFor="duration">Duration: </label>
                <input type="text" id="duration" value={duration} onChange={e=>setDuration(e.target.value)} />
                <label htmlFor="description">Description: </label>
                <textarea
                    id="description" 
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                    onFocus={handleFocus}
                    onKeyUp={handleEnter}
                >
                </textarea>
                <button onClick={addWorkExp}>Add work experience</button>
            </section>
            <section className="enter-work-expirience">
                <h2>Education:</h2>
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" value={degree} onChange={e=>setDegree(e.target.value)} />
                <label htmlFor="school">School</label>
                <input type="text" id="school" value={school} onChange={e=>setSchool(e.target.value)} />
                <button onClick={addEducation}>Add education</button>
            </section>
            <section className="enter-skills">
                <label htmlFor="skill">Skill: </label>
                <input type="text" id="skill" value={skill} onChange={e=>setSkill(e.target.value)} />
                <button onClick={addSkill}>Add skill</button>
            </section>
        </div>
    );
}