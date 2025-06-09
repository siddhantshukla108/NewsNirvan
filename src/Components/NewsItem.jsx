import image from "../assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3"
      style={{ width: "360px", borderRadius: "0.375rem" }}
    >
      <img
        src={src || image}
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover",
          borderTopLeftRadius: "0.375rem",
          borderTopRightRadius: "0.375rem",
        }}
        className="card-img-top"
        alt={title ? title.slice(0, 30) : "News image"}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = image;
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "No Title"}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "No description available"}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
