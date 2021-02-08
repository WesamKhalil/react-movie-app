import React from 'react'

const image = 'https://image.tmdb.org/t/p/w1280'

function Movie({title, poster_path, overview, vote_average}) {

    const voteClass = vote => {
        if(vote >= 8) {
            return 'green'
        } else if(vote >= 6) {
            return 'orange'
        } else if(vote == 0){
            return ''
        } else {
            return 'red'
        }
    }

    return (
        <div className='movie'>
            <img 
                src={poster_path ? image + poster_path : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png'}  
                alt={title}
            />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={voteClass(vote_average)}>{vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}
export default Movie
