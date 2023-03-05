import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes ,Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Movie from './Pages/MovieDetails';

const Router = () => {
    return (
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/:movie_id" element={<Movie/>} />
      </Routes>
    );
  };
  
  export default Router;