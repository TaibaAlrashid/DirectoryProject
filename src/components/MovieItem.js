import { MovieWrapper } from "../styles";
import { Link } from "react-router-dom";
const MovieItem = (props) => {
  return (
    <MovieWrapper>
      <Link to={`/${props.movie.id}`}>
        <img src={props.movie.poster} alt={props.movie.title} width="300" />
      </Link>
    </MovieWrapper>
  );
};

export default MovieItem;
