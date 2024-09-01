import React, { useReducer, createContext, useContext, useEffect } from 'react';

// Initial state
const initialState = {
  user: null,
  FLOWING: [],
  FLOWING2: [],
  toogle: false,
  tokn_user: null,
  channel: null,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ADD_LIST1':
      return {
        ...state,
        FLOWING2: [...state.FLOWING2, action.payload_item]
      };

    case 'SET__USER__FROM__FIRE__BASE':
      return {
        ...state,
        user: action.payload__xuser
      };

    case 'SET_FLOWING':
      return {
        ...state,
        FLOWING: [...state.FLOWING, action.payload__flow]
      };

    case 'UPDATE__USER':
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload.email,
          bio: action.payload.bio
        }
      };

    case 'SET__TOOGLE__TRUE':
      return {
        ...state,
        toogle: true
      };

    case 'SET__TOOGLE__FALSE':
      return {
        ...state,
        toogle: false
      };

    case 'SET__TOKEN__USER':
      return {
        ...state,
        tokn_user: action.payloadDataINdex
      };

    case 'SET__channel':
      return {
        ...state,
        channel: action.payload
      };

    default:
      return state;
  }
};

// Create Global Context
export const GlobalContext = createContext(initialState);

const ContextProvider = ({ children }) => {
  // Retrieve state from local storage, or use initial state if not available
  const storedState = JSON.parse(localStorage.getItem('appState'));
  const [state, dispatch] = useReducer(reducer, storedState || initialState);

  useEffect(() => {
    // Create a copy of state excluding the 'channel' property
    const { channel, ...stateToStore } = state;
    
    // Save the filtered state to local storage
    localStorage.setItem('appState', JSON.stringify(stateToStore));

    console.log('State updated:', state);
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const Nahdi_Gayth = () => {
  return useContext(GlobalContext);
};
