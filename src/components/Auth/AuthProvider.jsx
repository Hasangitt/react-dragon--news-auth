import PropTypes from "prop-types";
import { AuthContext } from "./CreactContext";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "./firebase.config";


const AuthProvider = ({children}) => {

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true)
    
const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password )
}

const loginUser = (email, password) => {
    setLoading(true)
   return signInWithEmailAndPassword (auth, email, password)
}

const logOutUser = () => {
    setLoading(true)
    signOut(auth)
}

useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setLoading(false)
        setUser(currentUser);
        
    })
    return () => {
        unsubscribe()
    }
}, [])


const authInfo = {user, loading, createUser, loginUser, logOutUser}

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}