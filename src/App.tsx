import { useEffect, useState } from 'react';
import './App.css';
import { Button } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  }, []);

  return (
    <>
      {count}
      <br />
      <Button variant="contained">Hello world</Button>
    </>
  );
}

export default App;
