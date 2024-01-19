import Results from "./Results"
import { useState, useEffect } from "react"

const Home = () => { 
    const [search, setSearch] = useState('')
    const [dataSearch, setDataSearch] = useState ('')
    useEffect(()=> {
        console.log(search)
      },[search])

      const sendSearch = () => {
        if (search.length > 0){
            setDataSearch(search)
        }
      }
      
    return( 
        <div>
          
            <input type='text' name='search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Inserisci il nome della città"/>
            <button type='button' onClick={() => sendSearch()}>Cerca</button>
      
            <Results search={dataSearch}></Results>
        </div>
    )
}

export default Home