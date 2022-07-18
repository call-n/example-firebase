import { useEffect, useState } from 'react'

// Firebase imports
import { db } from './Firebase/config'
import { collection, getDocs } from 'firebase/firestore'

function App() {
  const [sodas, setSodas] = useState(null)

  useEffect(() => {
    const ref = collection(db, 'sodas')

    getDocs(ref)
      .then((snapshot) => {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()})
        })
        setSodas(results)
      })
  }, [])

  console.log(sodas)

  return (
    <div className="App">
      lol
    </div>
  );
}

export default App;
