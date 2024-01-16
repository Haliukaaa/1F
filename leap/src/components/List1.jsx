import List4 from "@/components/List4";

export default function List1(props) {
  return (
    <div>
      <p>First name: {props.firstName}</p>
      <List4 age={props.age}/>
    </div>
  );
}
