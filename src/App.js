import './App.css';
import Movie from './Components/Movie';
import { useEffect, useState } from 'react';

// const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b18&page=1"
// const IMG_API = "https://image.tmdb.org/t/p/w1280"
// const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b18&query="

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])
  
  const getMovies = (API) => {
    fetch(API)
    .then(res => res.json())
    .then(data => { 
      setMovies(data.results) 
    });
  }

  const handleOnSubmit = (e) =>  {
    e.preventDefault();

    if(searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      
      // fetch(SEARCH_API + searchTerm)
      // .then(res => res.json())
      // .then(data => { 
      //   setMovies(data.results) 
      // });
      setSearchTerm('')
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input className='search' type='search' placeholder='Search...' value={searchTerm} onChange={handleOnChange}/>
        </form>
      </header>
      <div className='movie-container'>
        {movies.length > 0 && movies.map((movie) => (
          <Movie key={movie.id} {...movie}/>
        ))}
      </div>
    </>
  );
}

export default App;
