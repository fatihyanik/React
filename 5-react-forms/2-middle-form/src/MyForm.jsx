import  { useState } from 'react';
import "./MyForm.css"

const MyForm = () => {
  // Form verilerini state olarak saklamak için useState hook'unu kullanıyoruz
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // İnput değişikliklerini işlemek ve form verilerini state'i güncellemek için kullanılacak fonksiyon
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Form gönderildiğinde çalışacak işlemleri burada ekleyebilir veya sunucuya gönderebilirsiniz
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Gönderilen Veriler: ', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="my-form">
      {/* Kullanıcı Adı Alanı */}
      <div>
        <label>Kullanici Adi:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>

      {/* E-posta Alanı */}
      <div>
        <label>E-posta:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      {/* Şifre Alanı */}
      <div>
        <label>Şifre:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>

      {/* Gönder Butonu */}
      <button type="submit" className="submit-button">Gönder</button>
    </form>
  );
};

export default MyForm;
