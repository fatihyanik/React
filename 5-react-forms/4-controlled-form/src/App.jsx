import  { useState } from 'react';
import './index.css'; // CSS dosyasını import ediyoruz

const ControlledForm = () => {
  // State tanımlaması
  const [inputValue, setInputValue] = useState('');

  // Input değeri değiştiğinde çalışacak fonksiyon
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Gönderilen Değer:', inputValue);
  };

  return (
    <div className="form-container"> {/* CSS sınıfını ekledik */}
      <form onSubmit={handleSubmit}>
        <label>
          Kontrollü Form:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default ControlledForm;
