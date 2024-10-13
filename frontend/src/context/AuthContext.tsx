import React, { createContext, useReducer, ReactNode, Dispatch } from "react";


// Define User and State Types
export interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  pic: string;
  token: string;
}

interface AuthState {
  user: User | null;
}

interface AuthAction {
  type: "LOGIN" | "LOGOUT" | "SIGNUP";
  payload?: User;
}

// Reducer to handle auth actions
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
        return {...state ,  user: action.payload || null };
    case "SIGNUP":
      return { ...state , user: action.payload || null };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

// Context Props for typing
interface AuthContextProps {
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
}

// Create the context
export const AuthContext = createContext<AuthContextProps>( {state : {user : null  } , dispatch : ()=> {}});

// AuthProvider to wrap around the app
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialState: AuthState = {
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
