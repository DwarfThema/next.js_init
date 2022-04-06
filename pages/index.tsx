import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "3a74fd88ff1eacb2c32ae9eaaef00278";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>로딩중..</h4>}
      {movies?.map((movie: any) => (
        <div key={movie.id}>
          <h4> {movie.original_title} </h4>
        </div>
      ))}
    </div>
  );
}
