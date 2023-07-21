import React, { useState } from 'react';
import FormSign from './components/FormSign';
import FormSuccess from './components/FormSuccess';

function App() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccess(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setShowSuccess(false);
  };

  const handleDismiss = () => {
    setShowSuccess(false);
  };

  return (
    <main className='container'>
      {/* Conditional rendering based on 'showSuccess' state */}
      {!showSuccess ? (
        <FormSign
          email={email}
          handleEmailChange={handleEmailChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <FormSuccess email={email} handleDismiss={handleDismiss} />
      )}
    </main>
  );
}

export default App;
