import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }: any) {
  const router = useRouter();
  const onClick = (id: any, title: string) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          id: id,
          title: title,
        },
      },
      `/movies/${id}`
      //as 부분으로 브라우저 주소의 정보를 마스킹해줘서 안보이게 할 수 있다.
    );
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie: any) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link
              href={{
                pathname: `/movies/${movie.id}`,
                query: {
                  id: movie.id,
                  title: movie.original_title,
                },
              }}
              as={`/movies/${movie.id}`}
              key={movie.id}
            >
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0.1) 0px 4px 12px;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie {
            cursor: pointer;
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
