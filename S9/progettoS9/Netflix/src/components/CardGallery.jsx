import {useEffect, useState} from 'react';
import MovieSection from './MovieSection';

const CardGallery = ({saga}) => {
    const [movies, setMovies] =useState([])

    const fetchData = async () => {
    try {
            const res = await fetch(
                'http://www.omdbapi.com/?s='+saga+'&apikey=31cd2a73'
            )
            if (res.ok) {
                let data = await res.json()
                setMovies(data.Search)
                console.log(data.Search)
            } else {
                console.log('error')
            }
            } catch (error) {
                console.log(error)
            }
    }
    
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
        <section>
            <div className='row mb-5'>
                <h4>{saga}</h4>
                <div className='col-12 d-flex flex-row spazi gap-4'>
                {movies.slice(0,6).map((movie)=>
                 <img src={movie.Poster} alt={movie.Title}  className='poster' key={movie.imdbID}/>
                 
                )}
                </div>
                </div>
                </section>
                </>

    )
    
}

export default CardGallery