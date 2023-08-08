import React, { useRef } from 'react';
import './index.css'; // CSS dosyasını import ediyoruz

const UncontrolledForm = () => {
  // Input değerine erişmek için useRef kullanıyoruz
  const inputRef = useRef();

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Gönderilen Değer:', inputRef.current.value);
  };

  return (
    <div className="form-container"> {/* CSS sinifini ekledik */}
      <form onSubmit={handleSubmit}>
        <label>
          Kontrolsüz Form:
          <input type="text" ref={inputRef} />
        </label>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
