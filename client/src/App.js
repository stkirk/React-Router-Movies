import React, { useState, useEffect } from "react";
import axios from "axios";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import { Route, Link, Switch } from "react-router-dom";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies") // Study this endpoint with Postman
        .then((response) => {
          // console.log("axios response", response);
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList
        list={
          [
            /* This is stretch */
          ]
        }
      />

      <Switch>
        {/* Most specific at top */}
        <Route path="/movies/:id">
          <Movie movies={movieList} />
        </Route>

        {/* Least specific at bottom */}
        <Route path="/">
          <MovieList />
        </Route>
      </Switch>
    </div>
  );
}
