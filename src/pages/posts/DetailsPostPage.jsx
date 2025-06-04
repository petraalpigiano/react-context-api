import axios from "axios";
import DetailsCard from "../../components/DetailsCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailsPostPage() {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState({});
  useEffect(() => {
    axios.get("http://localhost:3000/posts/" + id).then((res) => {
      const specificPost = res.data;
      setPostDetails(specificPost);
    });
  }, []);
  return (
    <>
      <DetailsCard postDetails={postDetails} />
    </>
  );
}
