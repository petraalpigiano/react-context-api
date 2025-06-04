import { usePosts } from "../contexts/PostsContext";
import PostCard from "./PostCard";

export default function PostsList() {
  const { postsList } = usePosts();
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {postsList.map(function (currentCard) {
            return <PostCard currentCard={currentCard} key={currentCard.id} />;
          })}
        </div>
      </div>
    </>
  );
}
