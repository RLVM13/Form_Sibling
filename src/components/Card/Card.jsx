import React from 'react';
import {createContext} from 'react';

// Crear el contexto
export const UserContext = createContext();

const Card = ({ fom }) => {
  return (
    <div>
      <p>Datos del Formulario: {fom}</p>
    </div>
  );
};

export default Card;