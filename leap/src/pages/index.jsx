import firstName from "@/components/firstName";

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
      <firstName firstName="Duluu" />
    </div>
  );
}
