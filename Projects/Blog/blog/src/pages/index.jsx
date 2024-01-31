import {
  Header,
  Articles,
  Carousel,
  Contact,
  Footer,
  Trending,
} from "../components/layout/index";
import {useState} from 'react';





export default function Home() {
  const [articles, setArticles] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);

  const fetchData = async () => {
    let articleNumber = 9;



    try {
      const response = await fetch(`https://dev.to/api/articles?per_page=${articleNumber}&tags=learning,coding,career,community,webdev`);
      const data = await response.json();
      setArticles(data);
      setFilteredArray(data);
    } catch (error) {console.error(error);};
  }

  return (
    <div className="container max-w-screen-xl mx-auto">
      <Header />
      <Carousel/>
    </div>
  );
}
