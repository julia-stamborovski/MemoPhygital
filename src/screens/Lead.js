import React, { useState } from 'react';
import { FIRESTORE_DB } from '../firebaseConfig.js';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import '../App.css';

function Lead() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const navigate = useNavigate(); // init hook useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const leadsRef = doc(collection(FIRESTORE_DB, 'leads'));

      await setDoc(leadsRef, formData);

// Limpando os dados do formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
      });
    } catch (error) {
      console.error('Erro ao adicionar lead: ', error);
    }
    navigate('/memo', { state: formData }); // Use o hook navigate
  };

  return (
    <div className='lead-form'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Telefone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <button type="submit">Ajudar Clodo</button>
      </form>
    </div>
  );
}

export default Lead;
