import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Results = ({search})  => {
    const location = useLocation
    const searchTerms = new URLSearchParams(location.search).get('cerca')

    
    const [movies, setMovies] = useState([])
    
    const fetchData = async () => {
        try{
        const res = await fetch (  'http://www.omdbapi.com/?s='+search+'&apikey=31cd2a73')
        if (res.ok) {
            let data = await res.json()
            if (data.Search)
            {setMovies(data.Search)}
        } else {
           console.log('error')
        } 
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        if (searchTerms?.length > 2)
        setSearch(searchTerms)
    }, [])

    useEffect( () => {
        if (search?.length > 2)
        fetchData()
    }, [search])
    return (
        <>
        <section>
            <div className='row mb-5'>
                <h4>{search}</h4>
                <div className='col-12 d-flex flex-row spazi gap-4'>
                {movies.slice(0,6).map((movie)=>
                 <img src={movie.Poster} alt={movie.Title}  className='poster' key={movie.imdbID} />
                 )}
                </div>
                </div>
                </section>
                </>

    )
}

export default Results

