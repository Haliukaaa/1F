const TechStack = (props) => {
  return (
    <div>
      <div className="flex justify-center items-center dark:white-text">{props.logo}</div>
      <p className="text-center text-base lg:text-lg dark:white-text">{props.name}</p>
    </div>
  );
};

export default TechStack;
