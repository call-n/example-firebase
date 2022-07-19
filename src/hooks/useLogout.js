// import the firebase functions
import { auth } from '../Firebase/config'
import { signOut } from "firebase/auth";

export const useLogout = () => {

    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log('User signed out')
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return { logout }
}