const TechStack = (props) => {
    console.log(props);
  return (
    <div>
      <div className="flex justify-center items-center">{props.logo}</div>
      <p className="text-center">{props.name}</p>
    </div>
  );
};

export default TechStack;
