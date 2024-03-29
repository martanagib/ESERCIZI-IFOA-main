import { SET_ALL_DATA, SET_COGNOME, SET_ETA, SET_NOME } from "../actions/utenteReducer";

const initialState = {
  nome: "Mario",
  cognome: "Rossi",
  eta: "99",
};

const utenteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOME:
      return {
        ...state,
        nome: action.payload,
      };
    case SET_COGNOME:
      return {
        ...state,
        cognome: action.payload,
      };
    case SET_ETA:
      return {
        ...state,
        eta: action.eta,
      };
    case SET_ALL_DATA:
      return {
        ...state,
        nome: action.payload.nome,
        cognome: action.payload.cognome,
        eta: action.payload.eta,
      };
    default:
      return state;
  }
};

export default utenteReducer;
