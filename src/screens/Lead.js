import React, { useState } from 'react';
import { FIRESTORE_DB } from '../firebaseConfig.js';
import { collection, doc, setDoc } from 'firebase/firestore';

function Lead() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const leadsRef = doc(collection(FIRESTORE_DB, 'leads'));

      await setDoc(leadsRef, formData);

      // Limpar os campos do formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
      });
    } catch (error) {
      console.error('Erro ao adicionar lead: ', error);
    }
  };

  return (
    <div className='lead-form'>
      <h2>Formulário de Lead</h2>
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

        <button type="submit">Iniciar</button>
      </form>
    </div>
  );
}

export default Lead;
