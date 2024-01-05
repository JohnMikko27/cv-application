import "../index.css";

const Form = ({changePersonalInformation, changeEducation, 
  changeExperience, changeProjects, changeSkills}) => {
  
  return (
    <form>
      <Input name="Personal Information" onChange={changePersonalInformation}></Input>
      <Input name="Education" onChange={changeEducation}></Input>
      <Input name="Experience" onChange={changeExperience}></Input>
      <Input name="Projects" onChange={changeProjects}></Input>
      <Input name="Skills" onChange={changeSkills}></Input>
    </form>
  );
};

const Input = ({name, onChange}) => {
  return (
    <div>
      <label>{name[0].toUpperCase() + name.toLowerCase().slice(1)}</label>
      <input onChange={onChange}/>
    </div>
  );
};

export default Form;

//maybe we could have a section component that takes a name parameter for the name of the section
// and then we have conditional statements that check the name and 
// return the appropriate section depending on the name
// personal info: full name, phone#, email, address
// education: school name, years attended, major, etc. 