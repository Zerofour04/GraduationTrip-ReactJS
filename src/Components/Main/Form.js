import React from 'react';
import { Alert } from 'react-bootstrap';

function Contact({ show, setShow }) {
  const handleButtonClick = () => {
    setShow(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Kontakt</button>
      {show && (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Leider ist diese Funktion noch nicht drin</Alert.Heading>
          <p>Hier werden in Zukunft Kontaktmöglichkeiten stehen.</p>
        </Alert>
      )}
    </div>
  );
}

export default Contact;
