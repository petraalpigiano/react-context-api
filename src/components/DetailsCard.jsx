export default function DetailsCard({ postDetails }) {
  return (
    <>
      <div className="container my-4">
        <div className="card ">
          <img
            src={"http://localhost:3000" + postDetails.image}
            className="card-img-top"
            alt={postDetails.title}
          />
          <div className="card-body">
            <h5 className="card-title text-center ">{postDetails.title}</h5>
            <p className="card-text">{postDetails.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
