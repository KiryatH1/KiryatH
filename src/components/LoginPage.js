// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // שינוי הנתיב: שתי נקודות מעלות אותך תיקייה אחת למעלה

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      navigate('/home');
    } else {
      alert('שם משתמש או סיסמה שגויים');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <h2>התחברות למערכת</h2>
          <input
            type="text"
            placeholder="שם משתמש"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="סיסמה"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">התחבר</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;