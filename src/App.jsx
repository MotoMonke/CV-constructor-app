import { useState } from 'react';
import CVContainer from './components/CVContainer';
function App() {
  const [count, setCount] = useState(0);
  return (
    <CVContainer/>
  )
}

export default App
