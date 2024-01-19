import { useNavigate } from "react-router-dom"
import {useState} from 'react'

const Search = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    
    const handleSearch = () => {
        navigate('/risultati?cerca=' + search)
    }
    return (
        <div>
            <input type='text' name='search' value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleSearch} className='btn btn-success'>Cerca</button>
        </div>
    )
}

export default Search