import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/contacts');
        setContacts(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact._id}>{contact.name} - {contact.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;