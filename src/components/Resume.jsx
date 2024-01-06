const Resume = ({value}) => {

  return (
    <div>
      <div>
        <div>Full Name: {value.fullName}</div>
        <div>Phone Number: {value.phoneNumber}</div>
        <div>Email: {value.email}</div>
        <div>Address: {value.address}</div>
      </div>
      <div>
        <div>School Name: {value.schoolName}</div>
        <div>Degree: {value.degree}</div>
        <div>Start Date: {value.schoolStartDate}</div>
        <div>End Date: {value.schoolEndDate}</div>
        <div>Location: {value.schoolLocation}</div>
      </div>
      <div>
        <div>Company: {value.companyName}</div>
        <div>Position: {value.positionTitle}</div>
        <div>Start Date: {value.experienceStartDate}</div>
        <div>End Date: {value.experienceEndDate}</div>
        <div>Location: {value.experienceLocation}</div>
        <div>Description: {value.description}</div>
      </div>
      <div>
        <div>Project Name: {value.projectName}</div>
        <div>GitHub: {value.github}</div>
        <div>Live: {value.live}</div>
        <div>Details: {value.projectDetails}</div>
      </div>
      <div>
        <div>Skills: {value.skills}</div>
      </div>
    </div>
    
  );
};

export default Resume;

// changeFullName, changePhoneNumber, changeEmail, changeAddress,
//   changeSchoolName, changeDegree, changeSchoolStartDate, changeSchoolEndDate, changeSchoolLocation,
//   changeCompanyName, changePositionTitle, changeExperienceStartDate, changeExperienceEndDate,
//   changeExperienceLocation, changeDescription, changeProjectName, changeGithub, changeLive,
//   changeProjectDetails, changeSkills