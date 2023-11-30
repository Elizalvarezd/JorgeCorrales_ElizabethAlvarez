import { createContext, useReducer, useMemo, useEffect } from 'react';

export const initialState = {
  theme: '',
  data: [],
};

const actionTypes = {
  SET_DATA: 'SET_DATA',
  SET_THEME: 'SET_THEME',
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_THEME: {
      return { ...state, ...payload };
    }
    case actionTypes.SET_DATA: {
      return { ...state, ...payload };
    }
    default:
      return { ...state };
  }
};

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  // Recuperar el estado del tema desde localStorage al inicio
  const storedTheme = localStorage.getItem('theme');
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    theme: storedTheme || initialState.theme,
  });

  // Almacenar el tema en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('theme', state.theme);
  }, [state.theme]);

  const value = useMemo(() => [state, dispatch], [state]);

  return <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>;
};
