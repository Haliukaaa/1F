import List5 from "@/components/List5";

export default function List3(props) {
  return (
    <div>
      <p>Last name: {props.lastName}</p>
      <List5 work={props.work}/>
    </div>
  );
}