import React, {useState, useEffect} from 'react'
import Movie from './components/Movie.js'
import './styles.css'

const apiKey = ''
const featured = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
const search = `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&query=`

function App() {

    const [movies, setMovies] = useState([])

    const getMovies = async (api) => {
        const res = await fetch(api)
        const data = await res.json()
        setMovies(data.results)
    }

    useEffect(async () => {
        getMovies(featured)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        let url = search + e.target.query.value

        if(e.target.query.value == '') { url = featured }

        getMovies(url)
    }

    return (
        <div>
            <header>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='search' 
                        placeholder='Search...' 
                        className='search'
                        name='query'
                        autoComplete='off'
                    />
                </form>
            </header>
            <div className='movie-container'>
            {movies.map((movie, ind) => (
                <Movie 
                key={'movie ' + ind}
                {...movie}
                />
            ))}
            </div>
        </div>

    )
}

export default App
