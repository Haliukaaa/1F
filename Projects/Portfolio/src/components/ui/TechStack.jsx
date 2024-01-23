const TechStack = (props) => {
  return (
    <div>
      <div className="flex justify-center items-center">{props.logo}</div>
      <p className="text-center text-base lg:text-lg">{props.name}</p>
    </div>
  );
};

export default TechStack;
