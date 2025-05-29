import { createContext, useState } from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";


const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null)

    const signup = async (name, email, password) => {
        try {
            setLoading(true)
            const res = await api.post('/users', {
                name,
                email,
                password
            })
            console.log("Data: ", res.data);
            setLoading(false)
            navigation.goBack();
        } catch (error) {
            console.log("Erro: ", error)
            setLoading(false)
        }
    }
    return (
        <AuthContext.Provider value={{ signed: !!user, signup, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;