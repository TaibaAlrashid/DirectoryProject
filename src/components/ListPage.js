import movies from "../movies";
import MovieItem from "./MovieItem";
import { ListWrapper } from "../styles";

const ListPage = () => {
  const moviesList = movies.map((movie) => (
    <MovieItem movie={movie} id={movie.id} />
  ));

  return <ListWrapper>{moviesList}</ListWrapper>;
};

export default ListPage;
