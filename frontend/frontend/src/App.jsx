import Register from './register';
import Login from './login';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>👕 ReWear – Auth Portal</h1>
      <Register />
      <hr />
      <Login />
    </div>
  );
}

export default App;
