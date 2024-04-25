// App.tsx
import React, { useEffect, useState } from 'react';
import { fetchMessage } from './apiServices.js';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMessage();
        setMessage(data.message);
      } catch (error) {
        setMessage('Error fetching message.');
      }
    };

    fetchData();
  }, []);

  return <div>{message}</div>;
};

export default App;
