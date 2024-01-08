const Section = ({values}) => {
    
  // if i add placeholder values in the state object in main, 
  //   then this should work because every property would have a value because right now it's just null
  const divs = values.map((value, index) => <div key={index}>{value}</div>);
  return (
    <div>
      {divs}
    </div>
  );
};

export default Section;