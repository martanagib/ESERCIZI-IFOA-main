import Results from "./Results"
import Search from "./Search"
import { useState } from "react"

const Home = () => { 
    const [search, setSearch] = useState('')
    return( 
        <div>
            <h2>Home</h2>
          
            <input type='text' name='search' value={search} onChange={(e) => setSearch(e.target.value)} />
      
            <Results search={search}></Results>
        </div>
    )
}

export default Home