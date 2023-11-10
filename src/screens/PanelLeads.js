import React, { useEffect, useState } from 'react';
import '../App.css';
import { FIRESTORE_DB } from '../firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';

function PanelLeads() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const leadRef = collection(FIRESTORE_DB, 'scores');

        const snapshot = await getDocs(leadRef);

        const leadsData = [];
        snapshot.forEach((doc) => {
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
