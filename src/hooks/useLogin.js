import { useState } from 'react'

// import the firebase functions
import { auth } from '../Firebase/config'
import { signInWithEmailAndPassword } from "firebase/auth";


export const useLogin = () => {
    const [error, setError] = useState(null)

    const login = (email, password) => {
        setError(null) 
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log('User logged in:', res.user)
            })
            .catch((err) => {
                setError(err.message)
            })
    }

    return { error, login }
}