import { useState } from "react";
import Form from "./Form";
import Resume from "./Resume";

const Main = () => {
  const [value, setValue] = useState({});

  function changePersonalInformation(e) {
    setValue({
      ...value,
      personalInformation: e.target.value
    });
  }

  function changeEducation(e){
    setValue({
      ...value,
      education: e.target.value
    });
  }

  function changeExperience(e) {
    setValue({
      ...value,
      experience: e.target.value
    });
  }

  function changeProjects(e) {
    setValue({
      ...value,
      projects: e.target.value
    });
  }
  
  function changeSkills(e) {
    setValue({
      ...value,
      skills: e.target.value
    });
  }

  return (
    <>
      <Form 
        changePersonalInformation={changePersonalInformation} 
        changeEducation={changeEducation} 
        changeExperience={changeExperience}
        changeProjects={changeProjects}
        changeSkills={changeSkills}>
      </Form>
      <Resume value={value}></Resume>
    </>
    
  );
};

export default Main;