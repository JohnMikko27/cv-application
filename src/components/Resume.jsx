const Resume = ({value}) => {

  return (
    <div>
      <div>Personal Information: {value.personalInformation}</div>
      <div>Education: {value.education}</div>
      <div>Experience: {value.experience}</div>
      <div>Projects: {value.projects}</div>
      <div>Skills: {value.skills}</div>
    </div>
  );
};

export default Resume;