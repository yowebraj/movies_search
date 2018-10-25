import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.performSearch()
  }

  performSearch(searchTerm) {
    console.log("Perform search using MovieDB")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=3712187b9567af952897dff4620c2352&query=" + searchTerm
    
    $.ajax({
      url: urlString,
      
      success: (searchResults) => {
        console.log("Fetched data successfully")
        const results = searchResults.results

        var movieRows = []
        
        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185/" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })
        
        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    const bound = this
    const searchTerm = event.target.value
    bound.performSearch(searchTerm)
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
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
