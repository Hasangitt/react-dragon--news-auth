import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details } = news;

  return (
    <div>
      <div className="card card-compact bg-base-100 w-full shadow-xl mb-5">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}!</h2> 
            {
                details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${news._id}`} className="text-red-500">Read More...</Link></p> : <p>{details}</p>
            }
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

NewsCard.propTypes = {
    news: PropTypes.node
}
