import { useState } from "react";

// import the firebase functions
import { auth } from '../Firebase/config'
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
    const [error, setError] = useState(null)

    const signup = (email, password) => {
        setError(null) 
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log('User signed up:', res.user)
            })
            .catch((err) => {
                setError(err.message)
            })
    }

    return { error, signup }
}