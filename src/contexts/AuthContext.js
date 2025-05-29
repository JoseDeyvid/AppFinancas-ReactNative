import { createContext, useState } from "react";


const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Nome de teste"
    })
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;