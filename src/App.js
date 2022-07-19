import { useCollection } from './hooks/useCollection'

function App() {
  const { documents: sodas } = useCollection('sodas')
  
  console.log(sodas)

  return (
    <div className="App">
      lol
    </div>
  );
}

export default App;
