import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'

const Home = () => {

    const nome = useSelector(state => state.utente.nome)
    const cognome = useSelector(state => state.utente.cognome)
    const eta = useSelector(state => state.utente.eta)


    return (
        <div>
            <h2>Home</h2>
            <div>
                <p>Ciao, {nome} {cognome}, sappi che hai {eta} anni</p>
                <Link to='/profile'>Modifica profilo</Link>
            </div>
        </div>
    )
}

export default Home