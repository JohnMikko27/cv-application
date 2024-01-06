import "../index.css";
import Field from "./Field";

const Form = ({changeFullName, changePhoneNumber, changeEmail, changeAddress,
  changeSchoolName, changeDegree, changeSchoolStartDate, changeSchoolEndDate, changeSchoolLocation,
  changeCompanyName, changePositionTitle, changeExperienceStartDate, changeExperienceEndDate,
  changeExperienceLocation, changeDescription, changeProjectName, changeGithub, changeLive,
  changeProjectDetails, changeSkills}) => {
  
  return (
    <form>
      <Field name="personal information" changeFullName={changeFullName} 
        changePhoneNumber={changePhoneNumber} changeEmail={changeEmail} changeAddress={changeAddress}>
      </Field>
      <Field name="education" changeSchoolName={changeSchoolName} changeDegree={changeDegree}
        changeSchoolStartDate={changeSchoolStartDate} changeSchoolEndDate={changeSchoolEndDate} 
        changeSchoolLocation={changeSchoolLocation}>
      </Field>
      <Field name="experience" changeCompanyName={changeCompanyName} 
        changePositionTitle={changePositionTitle} changeExperienceStartDate={changeExperienceStartDate}
        changeExperienceEndDate={changeExperienceEndDate} changeExperienceLocation={changeExperienceLocation}
        changeDescription={changeDescription}>
      </Field>
      <Field name="projects" changeProjectName={changeProjectName} changeGithub={changeGithub}
        changeLive={changeLive} changeProjectDetails={changeProjectDetails}></Field>
      <Field name="skills" changeSkills={changeSkills}></Field>

    </form>
  );
};

// and then i can add buttons to the form field that asks if they want to add more education/experience/projects etc. 

export default Form;
