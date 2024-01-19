import Results from "./Results"
import Search from "./Search"
import { useState } from "react"

const TvShows = () => {
    
        const [search, setSearch] = useState('')
        return( 
            <div>
                <h2>Tv Shows</h2>
              
                <input type='text' name='search' value={search} onChange={(e) => setSearch(e.target.value)} />
          
                <Results search={search}></Results>
            </div>
)}
export default TvShows