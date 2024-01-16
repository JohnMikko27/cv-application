import Section from "./Section";

const Resume = ({value}) => {

  return (
    <div id="resume">
      {/* <Section values={[value.fullName, value.phoneNumber, value.email, value.address]}></Section> */}

      <div className="personalInformation">
        <div>{value.fullName}</div>
        <div>{value.phoneNumber}</div>
        <div>{value.email}</div>
        <div>{value.address}</div>
      </div>
      <div className="education">
        <div>
          <div>{value.schoolName}</div>
          <div>{value.degree}</div>
        </div>
        <div>
          <div>{value.schoolStartDate} - {value.schoolEndDate}</div>
          <div>{value.schoolLocation}</div>
        </div>
      </div>
      <div className="experience">
        <div>
          <div>
            <div>{value.companyName}</div>
            <div>{value.positionTitle}</div>
          </div>
          <div>
            <div>{value.experienceStartDate} - {value.experienceEndDate}</div>
            <div>{value.experienceLocation}</div>
          </div>
        </div>
        <div>{value.description}</div>
      </div>
    </div>
    
  );
};

export default Resume;

// maybe the way to be able to add multiple educations/colleges or multiple experiences/jobs
// is by using javascript and not jsx?
// when they submit the or save the form, we get the values and then display it onto the resume??