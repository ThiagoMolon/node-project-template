import { useState, useEffect } from 'react';

export function useBackendStatus() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/status')
      .then(res => res.json())
      .then(data => setStatus(data.message))
      .catch(() => setStatus('Erro ao conectar ao backend'));
  }, []);

  return status;
}