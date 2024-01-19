import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <div>
            <p>Pagina non trovata!</p>
            <Link to='/'>Torna alla home</Link>
        </div>
    )
}

export default NotFound