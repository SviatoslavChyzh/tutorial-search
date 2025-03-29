import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(1);
  }, []);

  return (
    <>
      {count}
    </>
  )
}

export default App
