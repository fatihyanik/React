import { useState } from 'react';

// Başlangıç form verileri
const initialFormData = {
  username: '',
  email: '',
  password: '',
};

const MyForm = () => {
  // Form verilerini state olarak saklamak için useState hook'unu kullanıyoruz
  const [formData, setFormData] = useState(initialFormData);

  // İnput değişikliklerini işlemek ve form verilerini state'i güncellemek için kullanılacak fonksiyon
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Mevcut form verilerini kopyalayıp, değiştirilmiş veriyi ekliyoruz
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Form gönderildiğinde çalışacak işlemleri burada ekleyebilir veya sunucuya gönderebilirsiniz
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form verilerini konsola yazdırıyoruz (örnek olarak)
    console.log('Gönderilen Veriler: ', formData);
    // Örnek olarak sunucuya verileri göndermek için fetch kullanabilirsiniz.
    // fetch('/api/submit', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
    resetForm(); // Formu sıfırlamak için fonksiyonu çağırıyoruz
  };

  // Formu sıfırlamak için kullanılacak fonksiyon
  const resetForm = () => {
    setFormData(initialFormData); // Başlangıç form verileri ile state'i güncelliyoruz
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
          required // Bu alanın zorunlu olduğunu belirtiyoruz
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
          required // Bu alanın zorunlu olduğunu belirtiyoruz
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
          required // Bu alanın zorunlu olduğunu belirtiyoruz
        />
      </div>

      {/* Gönder Butonu */}
      <button type="submit">Gönder</button>
    </form>
  );
};

export default MyForm;
