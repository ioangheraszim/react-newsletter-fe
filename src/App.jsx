import React, { useState } from 'react';
import FormSign from './components/FormSign';
import FormSuccess from './components/FormSuccess';

function App() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubscribed(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <main className='container'>
      {subscribed ? (
        <FormSuccess email={email} />
      ) : (
        <FormSign
          email={email}
          handleEmailChange={handleEmailChange}
          handleSubmit={handleSubmit}
        />
      )}
    </main>
  );
}

export default App;