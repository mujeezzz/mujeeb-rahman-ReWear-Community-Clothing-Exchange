const API = 'http://localhost:8000';

export async function register(email, password) {
  const res = await fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function login(email, password) {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function getMe(token) {
  const res = await fetch(`${API}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}