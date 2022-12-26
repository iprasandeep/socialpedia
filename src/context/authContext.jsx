import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{

    const [ currentUser, setCurrentUser ] = useState(
        JSON.parse(localStorage.getItem('user')) ||  null
    );

    // login 
    const login = () =>{
        // to do 
        setCurrentUser({ id: 1, name:'Prasandeep', profilePic: ''})
    }
    useEffect(() => {
      localStorage.setItem('user', JSON.stringify(currentUser));
    
    }, [currentUser])
    
    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )

}