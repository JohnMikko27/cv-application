import { useState } from "react";
import Form from "./Form";
import Resume from "./Resume";

const Main = () => {
  const [value, setValue] = useState({});
  
  function changeFullName(e){
    setValue({
      ...value,
      fullName: e.target.value
    });
  }

  function changePhoneNumber(e){
    setValue({
      ...value,
      phoneNumber: e.target.value
    });
  }

  function changeEmail(e){
    setValue({
      ...value,
      email: e.target.value
    });
  }

  function changeAddress(e){
    setValue({
      ...value,
      address: e.target.value
    });
  }

  function changeSchoolName(e){
    setValue({
      ...value,
      schoolName: e.target.value
    });
  }

  function changeDegree(e){
    setValue({
      ...value,
      degree: e.target.value
    });
  }

  function changeSchoolStartDate(e){
    setValue({
      ...value,
      schoolStartDate: e.target.value
    });
  }

  function changeSchoolEndDate(e){
    setValue({
      ...value,
      schoolEndDate: e.target.value
    });
  }

  function changeSchoolLocation(e){
    setValue({
      ...value,
      schoolLocation: e.target.value
    });
  }

  function changeCompanyName(e){
    setValue({
      ...value,
      companyName: e.target.value
    });
  }

  function changePositionTitle(e){
    setValue({
      ...value,
      positionTitle: e.target.value
    });
  }

  function changeExperienceStartDate(e){
    setValue({
      ...value,
      experienceStartDate: e.target.value
    });
  }

  function changeExperienceEndDate(e){
    setValue({
      ...value,
      experienceEndDate: e.target.value
    });
  }

  function changeExperienceLocation(e) {
    setValue({
      ...value, 
      experienceLocation: e.target.value
    });
  }

  function changeDescription(e){
    setValue({
      ...value,
      description: e.target.value
    });
  }

  return (
    <div>
      <Form 
        changeFullName={changeFullName}
        changePhoneNumber={changePhoneNumber}
        changeEmail={changeEmail}
        changeAddress={changeAddress}
        changeSchoolName={changeSchoolName}
        changeDegree={changeDegree}
        changeSchoolStartDate={changeSchoolStartDate}
        changeSchoolEndDate={changeSchoolEndDate}
        changeSchoolLocation={changeSchoolLocation}
        changeCompanyName={changeCompanyName}
        changePositionTitle={changePositionTitle}
        changeExperienceStartDate={changeExperienceStartDate}
        changeExperienceEndDate={changeExperienceEndDate}
        changeExperienceLocation={changeExperienceLocation}
        changeDescription={changeDescription}
      >
      </Form>
      <Resume value={value}></Resume>
    </div>
    
  );
};

export default Main;