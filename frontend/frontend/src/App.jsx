import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/hello')
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch(() => setMsg('Failed to fetch from backend.'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>🚀 React + FastAPI</h1>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;
