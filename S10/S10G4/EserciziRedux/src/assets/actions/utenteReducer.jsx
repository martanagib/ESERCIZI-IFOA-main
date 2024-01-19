export const SET_NOME = 'SET_NOME'
export const SET_COGNOME = 'SET_COGNOME'
export const SET_ETA = 'SET_ETA'
export const SET_ALL_DATA = 'SET_ALL_DATA'




export const setNome = (newName) => {
    return {
        type: SET_NOME,
        payload: newName
    }
}

export const setCognome = (newSurname) => {
    return {
        type: SET_COGNOME,
        payload: newSurname
    }
}

export const setEta = (newAge) => {
    return {
        type: SET_ETA,
        payload: newAge
    }
}


export const setAllData = (newData) => {
    return {
        type: SET_ALL_DATA, 
        payload: newData
    }
}
