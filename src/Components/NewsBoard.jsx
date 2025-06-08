import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title || "No title"}
            description={news.description}
            src={news.urlToImage || "https://via.placeholder.com/360x200"}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
