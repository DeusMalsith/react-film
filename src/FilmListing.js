import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

class FilmListing extends Component {
  render() {
    let allFilms = this.props.films.map( (film, index) => (
      <FilmRow 
        title={film.title}
        year={new Date(film.release_date).getFullYear()}
        posterUrl={'https://image.tmdb.org/t/p/w780/' + film.poster_path}
      />
    ));
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <h1> {allFilms} </h1>
      </div>
    );
  }
}

export default FilmListing;
