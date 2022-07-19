// Custom hook for fetching real-time data
import { useCollection } from './hooks/useCollection'

// for deleting an document
import { db } from './Firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

// Form for creating a new document
import Form from './components/Form'
import Signup from './components/Signup'

function App() {
  // fetch
  const { documents: sodas } = useCollection('sodas')
  
  console.log(sodas)

  //delete function
  const handleClick = async (id) => {
    const reference = doc(db, 'sodas', id)
    await deleteDoc(reference)
  }

  return (
    <div className="App">
      <ul>
        {sodas && sodas.map(soda => 
          <li 
            key={soda.id} 
            onClick={() => handleClick(soda.id)}
          >
          {soda.title}, {soda.size}
          </li>
        )}
      </ul>
      <Form />
      <Signup />
    </div>
  );
}

export default App;
