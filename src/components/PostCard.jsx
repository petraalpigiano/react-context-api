import { Link } from "react-router-dom";

export default function PostCard({ currentCard }) {
  return (
    <>
      <div className="col">
        <Link to={`/posts/${currentCard.id}`} className="card h-100 link">
          <img
            src={"http://localhost:3000" + currentCard.image}
            className="card-img-top"
            alt={currentCard.title}
          />
          <div className="card-body ">
            <h5 className="card-title text-center">{currentCard.title}</h5>
          </div>
        </Link>
      </div>
    </>
  );
}
