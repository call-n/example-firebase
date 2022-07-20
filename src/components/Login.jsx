import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, login } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

  return (
    <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
            <span>Log in:</span>
            <label>
                Email:
                <input 
                    required
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                Password:
                <input 
                    required
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <input type="submit" value="Login" style={{width:"100px", marginTop:"10px"}}/>
            {error && <p>{error}</p>}
        </form>
  )
}
