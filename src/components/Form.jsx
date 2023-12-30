const Form = () => {
  return (
    <>
      <Field title="personal information" elements={["name", "email", "phone"]}/>
      <Field title="education" elements={["school", "major", "graduation"]}/>
      <Field title="skills" elements={["languages", "frameworks", "tools"]}/>
      <Field title="experience" elements={["title", "date", "details"]}/>
      <Field title="personal" elements={["name", "email", "phone"]}/>
    </>
  );
};

const Field = ({ title, elements}) => {
  return (
    <>
      <h1>{title.toUpperCase()}</h1>
      {
        elements.map((element) => {
          return <Input key={element} name={element}/>;
        })
      }
    </>
  );
};

const Input = ({name}) => {
  return (
    <>
      <label>{name[0].toUpperCase() + name.toLowerCase().slice(1)}</label>
      <input></input>
    </>
  );
};

export default Form;

// once i change the section/Field element of an h1 and a set of Input elements, 
// i can add a state that has an initial value of an array with predetermined values that correspond to inputs
// if the user wants to add more inputs (e.g. projects/ job experiences) they can change the state
// and add an additional value to the array and then should have a map function that Inputs based on the array