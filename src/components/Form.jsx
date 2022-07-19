import { useState } from 'react'

// imports from firebase
import { db } from '../Firebase/config'
import { collection, addDoc } from 'firebase/firestore'

export default function Form() {
    const [newSodaName, setNewSodaName] = useState('')
    const [newSodaSize, setNewSodaSize] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const reference = collection(db, 'sodas')

        await addDoc(reference, {
            title: newSodaName,
            size: newSodaSize
        })

        setNewSodaName('')
        setNewSodaSize(0)
    }

    return (
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
            <span>Add a new soda:</span>
            <label>
                Name:
                <input 
                    required
                    type="text"
                    onChange={(e) => setNewSodaName(e.target.value)}
                    value={newSodaName}
                />
            </label>
            <label>
                Size:
                <input 
                    required
                    type="number"
                    onChange={(e) => setNewSodaSize(e.target.value)}
                    value={newSodaSize}
                />
            </label>
            <input type="submit" value="Add Soda" style={{width:"100px", marginTop:"10px"}}/>
        </form>
    )
}
