import { useState } from 'react';
import "./MyForm.css"

const MyForm = () => {
  // State'leri tanımlayın, bu verileri form elemanlarıyla senkronize edeceğiz.
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Form gönderildiğinde çalışacak işlemleri buraya ekleyebilirsiniz.
  const handleSubmit = (event) => {
    event.preventDefault();
    // Formu işleme kodları burada olacak
    console.log('Gönderilen Veriler: ', { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Kullanıcı Adı:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>E-posta:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Şifre:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Gönder</button>
    </form>
  );
};

export default MyForm;
