const Field = ({name, changePersonalInformation, changeEducation, 
  changeExperience, changeProjects, changeSkills}) => {
  if (name.toLowerCase() === "personal information") {
    return (
      <div>
        <h1>Personal Information</h1>
        <Input name="full name"></Input>
        <Input name="phone number"></Input>
        <Input name="email"></Input>
        <Input name="address"></Input>
      </div>
    );
  } else if (name === "experience") {
    return (
      <div>
        <h1>Experience</h1>
        <Input name="company name"></Input>
        <Input name="position title"></Input>
        <Input name="start date"></Input>
        <Input name="end date"></Input>
        <Input name="description"></Input>

      </div>
    );
  } else if (name === "education") {
    return (
      <div>
        <h1>Education</h1>
        <Input name="school name"></Input>
        <Input name="degree"></Input>
        <Input name="start date"></Input>
        <Input name="end date"></Input>
        <Input name="location"></Input>
      </div>
    );
  } else if (name === "projects") {
    return (
      <div>
        <h1>Projects</h1>
        <Input name="project name"></Input>
        <Input name="github"></Input>
        <Input name="live"></Input>
        <Input name="detail"></Input>
      </div>
    );
  } else if (name === "skills") {
    return (
      <div>
        <h1>Skills</h1>
        <Input name="skills"></Input>
      </div>
    );
  }
};

const Input = ({name, onChange}) => {
  return (
    <div>
      <label>{name[0].toUpperCase() + name.toLowerCase().slice(1)}</label>
      <input onChange={onChange}/>
    </div>
  );
};

export default Field;


//maybe we could have a section component that takes a name parameter for the name of the section
// and then we have conditional statements that check the name and 
// return the appropriate section depending on the name
// personal info: full name, phone#, email, address
// education: school name, years attended, major, etc. 