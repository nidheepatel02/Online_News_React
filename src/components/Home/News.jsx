import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "../Items/NewsItem";
import "./newsboard.css"

const News = ({ items }) => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${items}&apiKey=(API_KEY)`;
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
  }, [items])

  return (
    <>
      <div className="news-container">
        <h1>Welcome To Online News</h1>
        <p>Want To Know More About Latest News</p>
        <h1 class="button">Scroll Down</h1>
      </div>

      <div>
        {articles.map((news, index) => {
          return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}

      </div>
    </>
  )
}
export default News