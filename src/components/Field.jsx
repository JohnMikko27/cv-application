const Field = ({name, changeFullName, changePhoneNumber, changeEmail, changeAddress,
  changeSchoolName, changeDegree, changeSchoolStartDate, changeSchoolEndDate, changeSchoolLocation,
  changeCompanyName, changePositionTitle, changeExperienceStartDate, changeExperienceEndDate,
  changeExperienceLocation, changeDescription, changeProjectName,  changeGithub,  changeLive,
  changeProjectDetails, changeSkills}) => {
  if (name.toLowerCase() === "personal information") {
    return (
      <div>
        <h1>Personal Information</h1>
        <Input name="full name" onChange={changeFullName}></Input>
        <Input name="phone number" onChange={changePhoneNumber}></Input>
        <Input name="email" onChange={changeEmail}></Input>
        <Input name="address" onChange={changeAddress}></Input>
      </div>
    );
  } else if (name === "experience") {
    return (
      <div>
        <h1>Experience</h1>
        <Input name="company name" onChange={changeCompanyName}></Input>
        <Input name="position title" onChange={changePositionTitle}></Input>
        <Input name="start date" onChange={changeExperienceStartDate}></Input>
        <Input name="end date" onChange={changeExperienceEndDate}></Input>
        <Input name="location" onChange={changeExperienceLocation}></Input>
        <Input name="description" onChange={changeDescription}></Input>
        
      </div>
    );
  } else if (name === "education") {
    return (
      <div>
        <h1>Education</h1>
        <Input name="school name" onChange={changeSchoolName}></Input>
        <Input name="degree" onChange={changeDegree}></Input>
        <Input name="start date" onChange={changeSchoolStartDate}></Input>
        <Input name="end date" onChange={changeSchoolEndDate}></Input>
        <Input name="location" onChange={changeSchoolLocation}></Input>
      </div>
    );
  } else if (name === "projects") {
    return (
      <div>
        <h1>Projects</h1>
        <Input name="project name" onChange={changeProjectName}></Input>
        <Input name="github" onChange={changeGithub}></Input>
        <Input name="live" onChange={changeLive}></Input>
        <Input name="details" onChange={changeProjectDetails}></Input>
      </div>
    );
  } else if (name === "skills") {
    return (
      <div>
        <h1>Skills</h1>
        <Input name="skills" onChange={changeSkills}></Input>
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