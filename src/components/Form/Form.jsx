import React, { useState } from 'react';

const Form = ({ setMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setMessage(inputValue); // Pasamos el mensaje al componente hermano a través de la función setMessage
  };

  return (
    <div>
      <input type="text" name="name" placeholder="Nombre" /><br />
      <input type="text" name="email" placeholder="Email" onChange={handleChange} /><br />
      <input type="text" name="url" placeholder="URL Foto" /><br />
      <input type="text" name="age" placeholder="Edad" /><br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default Form;