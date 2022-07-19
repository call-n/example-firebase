import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, signup } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password)
    }

  return (
    <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
            <span>Sign up:</span>
            <label>
                Email:
                <input 
                    required
                    type="text"
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
            <input type="submit" value="Add Soda" style={{width:"100px", marginTop:"10px"}}/>
            {error && <p>{error}</p>}
        </form>
  )
}
