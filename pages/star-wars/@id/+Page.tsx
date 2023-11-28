import React from "react";
import type { MovieDetails } from "../types";

export default Page;

function Page({ movie }: { movie: any }) {
  console.log(movie);
  return (
    <>
      {/* <h1>{movie.title}</h1>
      Release Date: {movie.release_date}
      <br />
      Director: {movie.director}
      <br />
      Producer: {movie.producer} */}
    </>
  );
}
