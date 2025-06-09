import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      if (!apiKey) {
        setError("API key is missing.");
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
        );
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Failed to fetch news:", error);
        setError("Failed to load news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container my-4">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {loading && <p className="text-center">Loading news...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      <div className="d-flex flex-wrap justify-content-center">
        {!loading && !error && articles.map((news, index) => (
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
// This component fetches and displays news articles based on the selected category.