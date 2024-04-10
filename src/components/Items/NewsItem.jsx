import image from '../assets/news.jpeg'
import "./items.css"

const NewsItem = ({ title, description, src, url }) => {
  return (
    <>
      <div className="card my-3 mx-3 px-2 py-2 " style={{ maxWidth: "345px" }}>
        <div className="card-body">
          <img src={src ? src : image} alt="..." />
          <h5>{title}</h5>
          <p>{description}</p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    </>
  )
}
export default NewsItem