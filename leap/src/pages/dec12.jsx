import List1 from "@/components/List1";
import List2 from "@/components/List2";
import List3 from "@/components/List3";

const array = [
  {
    firstName: "Duluu",
    score: "100",
    lastName: "Bill",
    age: 121212,
    work: "Pinecone",
  },
  {
    firstName: "Dashka",
    score: "69",
    lastName: "Bill",
    age: 121212,
    work: "Pinecone",
  },
];

export default function Home() {
  return (
    <div>
      {array.map((el) => {
        return (
          <div>
            <List1 firstName={el.firstName} age={el.age}/>
            <List2 score={el.score} />
            <List3 lastName={el.lastName} work={el.work}/>
          </div>
        );
      })}
    </div>
  );
}
