import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log("This is my initializer")

    /*const movies = [
      {id: 0, poster_src: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg", title: "Avengers: Infinity War", overview: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."},
      {id: 1, poster_src: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UY113_CR0,0,76,113_AL_.jpg", title: "Avengers: Age of Ultron", overview: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan."},
      {id: 2, poster_src: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY190_CR0,0,128,190_AL_.jpg", title: "The Avengers", overview: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."}
    ]

    var movieRows = [];

    movies.forEach((movie) => {
      console.log(movie.title)
      const movieRow = <MovieRow movie={movie} />
      movieRows.push(movieRow)
    })

    this.state = {rows: movieRows}*/

    this.performSearch()
  }

  performSearch() {
    console.log("Perform search using MovieDB")
    const urlString = "https://api.themoviedb.org/3/movie/550?api_key=3712187b9567af952897dff4620c2352"
    
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        const results = searchResults.results

        //TO-DO: Figure out why MovieDB's results aren't in an array
        //console.log(results[0])
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }

    })
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="moviedb.svg"/>
              </td>
              
              <td width="8"/>
             
              <td>
                <h2>MoviesDB Search</h2>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: "block",
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16,
        }} placeholder="Enter search term"/>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
