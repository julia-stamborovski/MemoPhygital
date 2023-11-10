import React, { useEffect, useState } from 'react';
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
    <div>
      <h2>Leads:</h2>
      <ul>
        {leads.map((lead) => (
          <li key={lead.id}>
            <strong>Name: {lead.name}</strong>
            <br />
            Email: {lead.email}
            <br />
            Phone: {lead.phone}
            <br />
            score: {lead.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PanelLeads;
