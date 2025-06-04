import { Link } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";
export default function PostsList() {
  const { postsList } = usePosts();
  //   const [postsList, setPostsList] = useState([]);
  //   useEffect(() => {
  //     axios.get("http://localhost:3000/posts").then((res) => {
  //       const listPosts = res.data;
  //       setPostsList(listPosts);
  //     });
  //   }, []);

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {postsList.map(function (currentCard) {
            return (
              <div className="col" key={currentCard.id}>
                <Link
                  to={`/posts/${currentCard.id}`}
                  className="card h-100 link"
                >
                  <img
                    src={"http://localhost:3000" + currentCard.image}
                    className="card-img-top"
                    alt={currentCard.title}
                  />
                  <div className="card-body ">
                    <h5 className="card-title text-center">
                      {currentCard.title}
                    </h5>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
