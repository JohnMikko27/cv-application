import Section from "./Section";

const Resume = ({value}) => {

  return (
    <div id="resume">
      {/* <Section values={[value.fullName, value.phoneNumber, value.email, value.address]}></Section> */}

      <div className="personalInformation">
        <div>John Mikko Velasquez{value.fullName}</div>
        <div>999-999-9999{value.phoneNumber}</div>
        <div>google.com@gmail.com{value.email}</div>
        <div>1234 Star Avenue{value.address}</div>
      </div>
      <div className="education">
        <div>
          <div>San Francisco State University{value.schoolName}</div>
          <div>Computer Science{value.degree}</div>
        </div>
        <div>
          <div>January 2024 - May 2026{value.schoolStartDate} - {value.schoolEndDate}</div>
          <div>San Francisco, CA{value.schoolLocation}</div>
        </div>
      </div>
      <div className="experience">
        <div>
          <div>
            <div>Google{value.companyName}</div>
            <div>Software Engineer{value.positionTitle}</div>
          </div>
          <div>
            <div>January 2024 - May 2024{value.experienceStartDate} - {value.experienceEndDate}</div>
            <div>San Francisco, CA{value.experienceLocation}</div>
          </div>
        </div>
        <div>Contributed to an open source project that aims to support sustainability and address climate change by providing a free, high-quality, web-based application that displays energy information in a browser
Wrote unit tests using JavaScript and Mocha framework that parses csv files and ensures that displayed energy information is accurate {value.description}</div>
      </div>
    </div>
    
  );
};

export default Resume;

// maybe the way to be able to add multiple educations/colleges or multiple experiences/jobs
// is by using javascript and not jsx?
// when they submit the or save the form, we get the values and then display it onto the resume??