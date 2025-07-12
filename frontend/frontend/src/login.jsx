import { useState } from 'react';
import { login, getMe } from './api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login(email, password);
    if (res.access_token) {
      localStorage.setItem('token', res.access_token);
      const user = await getMe(res.access_token);
      alert(`Welcome ${user.email}`);
    } else {
      alert(res.detail || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}