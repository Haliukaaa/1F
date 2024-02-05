import { createContext, useState, useEffect } from "react";
export const StateContext = createContext([]);

export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [filteredArray, setFilteredArray] = useState(articles);
  const [carousel, setCarousel] = useState([]);
  const [trending, setTrending] = useState([]);
  let count = 9;

  const fetchData = async () => {
    try {
      const articles = await fetch(
        `https://dev.to/api/articles?per_page=${count}`
      );
      const carousel = await fetch(
        "https://dev.to/api/articles?top=1&per_page=4"
      );
      const trending = await fetch(
        "https://dev.to/api/articles?state=rising&per_page=4"
      );

      const articlesData = await articles.json();
      const carouselData = await carousel.json();
      const trendingData = await trending.json();

      setArticles(articlesData);
      setFilteredArray(articlesData);
      setCarousel(carouselData);
      setTrending(trendingData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <StateContext.Provider value={{articles, carousel, trending}}>{children}</StateContext.Provider>;
};
