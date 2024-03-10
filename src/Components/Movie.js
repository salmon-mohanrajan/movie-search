import React from 'react'

const IMG_API = 'https://image.tmdb.org/t/p/w1280'

const setVoteClass = (vote) => {
    if(vote >= 8){
        return 'green'
    } else if (vote >= 6) {
        return 'orange'
    } else {
        return 'red'
    }
};

const Movie = ({ title, poster_path, overview, vote_average }) => {
    return (
        <div className='movie '>
            <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D'} alt={title} />
            <div className='movie-info'>
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className='movie-over'>
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )   
}

export default Movie;
