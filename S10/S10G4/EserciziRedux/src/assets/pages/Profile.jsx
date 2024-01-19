import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setAllData, setCognome, setEta, setNome } from '../actions/utenteReducer'
import { Link } from 'react-router-dom'




const Profile = () => {

    const dispatch = useDispatch()

    const [userData, setUserData] = useState ({
        nome: useSelector(state => state.utente.nome),
        cognome: useSelector(state => state.utente.cognome),
        eta: useSelector(state=> state.utente.eta)
    })


    const handleChangeData = (tipoDiDato) => {
        switch (tipoDiDato) {
            case 'nome' :
                dispatch(setNome(userData.nome))
                break;
            case 'cognome' :
                dispatch(setCognome(userData.cognome))
                break;
            case 'eta' :
                dispatch(setEta(userData.eta))
                break;
            default :
                break;
        }
    } 


    const setAll = () => {
        dispatch(setAllData(userData))
    }

    return (
        <div>
            <h2>Profilo</h2>
            <div>
                <p>Ciao, {userData.nome} {userData.cognome}, sappi che hai {userData.eta} anni</p>
            </div>
            <div style={{ minWidth: '500px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <input type='text' value={userData.nome} onChange={(e)=> setUserData({...userData, nome: e.target.value})} />
                <button onClick= {()=> handleChangeData('nome')}>Aggiorna nome</button>
                </div>  
                <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <input type="text" value={userData.cognome} onChange={(e) => setUserData({...userData, cognome: e.target.value})}/>
                <button onClick={() => handleChangeData('cognome')}>Aggiorna Cognome</button>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <input type="text" value={userData.eta} onChange={(e) => setUserData({...userData, eta: e.target.value})}/>
                <button onClick={() => handleChangeData('eta')}>Aggiorna eta</button>
                </div>
            </div>
            <button onClick={setAll}>Aggiorna tutti i dati</button>
            <Link to="/">Torna alla home</Link>
            </div>
    )
}

export default Profile