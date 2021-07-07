import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { id, title, director, metascore } = props.movie;

  const location = useLocation();
  // console.log("Movie-List location", location);

  return (
    <div className="movie-card">
      <Link to={`${location.pathname}movies/${id}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </Link>
    </div>
  );
}

// Wrap your app with the router.
// Inside your App file add two routes.
// one route for / that loads the MovieList component. This component will need the movies injected into it via props.

// one route that will take an id parameter after/movies/ (ex: /movies/2, /movies/3 where the id is dynamic). This route should load the Movie component.

// Add Functionality
// When a user clicks on the movie card inside MovieList they should be taken to /movies/{id of clicked movie here} to see the details of the selected movie.
// You will need to modify line 7 of Movie.js to get the id of the selected movie from the URL.
// Add functionality so the Home button on the SavedList component navigates back to home.
// You should now be able to navigate back and forth between the list of movies and the detailed view of a single movie
