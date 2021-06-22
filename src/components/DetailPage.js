import { useParams } from "react-router";
import { DetailWrapper } from "../styles";

const DetailPage = (props) => {
  const movieId = useParams().movieId;
  console.log(typeof movieId);
  const movie = props.movies.find((movie) => movie.id === +movieId);
  return (
    <DetailWrapper>
      <img src={movie.poster} alt={movie.name} />
      <p>{movie.title}</p>
      <p>{movie.released}</p>
      <p>{movie.genre}</p>
      <p>{movie.runtime}</p>
      <p>{movie.plot}</p>
    </DetailWrapper>
  );
};

export default DetailPage;
