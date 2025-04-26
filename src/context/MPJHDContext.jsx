import { createContext, useContext, useReducer } from 'react';

const initialState = {
  kategori: '',
  pasalUtama: '',
  kelompok: '',
  nilaiPokok: 0,
  status: 'sendiri',
  peran: '',
  pembobotan: {
    banyakPasal: false,
    pernahDihukum: false,
    kesengajaan: false,
    hambatPemeriksaan: false
  },
  meringankan: {
    kooperatif: false,
    mengakui: false,
    menyesal: false,
    tekanan: false
  }
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET': return { ...state, [action.key]: action.value };
    case 'SET_PEMBOBOTAN':
      return { ...state, pembobotan: { ...state.pembobotan, [action.key]: action.value } };
    case 'SET_MERINGANKAN':
      return { ...state, meringankan: { ...state.meringankan, [action.key]: action.value } };
    case 'RESET': return initialState;
    default: return state;
  }
}

const MPJHDContext = createContext();

export const MPJHDProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MPJHDContext.Provider value={{ state, dispatch }}>
      {children}
    </MPJHDContext.Provider>
  );
};

export const useMPJHD = () => useContext(MPJHDContext);
