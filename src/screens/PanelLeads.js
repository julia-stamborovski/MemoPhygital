import React, { useEffect, useState } from 'react';
import '../App.css';
import { FIRESTORE_DB } from '../firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';

function PanelLeads() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    //busca dos leads no Firestore
    const fetchLeads = async () => {
      try {
        const leadRef = collection(FIRESTORE_DB, 'scores'); //referência para a coleção 'scores' no Firestore

        const snapshot = await getDocs(leadRef); //getDocs é usado para obter um snapshot da coleção

        const leadsData = []; //Init array vazia que será utilizada para armazenar os dados dos leads.
        snapshot.forEach((doc) => { //Itera sobre cada documento no snapshot e extrai os dados, adicionando-os à array leadsData
          leadsData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setLeads(leadsData);
      } catch (error) {
        console.error('Erro ao buscar leads:', error);
      }
    };

    fetchLeads();
  }, []);

  return (
    <div className='container-leads'>
      <h2 className='title-leads'>Leads</h2>
      <ul>
        {leads.map((lead) => (
          <li key={lead.id} className='lead'>
            <strong>Nome: {lead.name}</strong>
            <br />
            E-mail: {lead.email}
            <br />
            Telefone: {lead.phone}
            <br />
            Score: {lead.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PanelLeads;
