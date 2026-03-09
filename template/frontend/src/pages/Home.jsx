import { useBackendStatus } from '../hooks/useBackendStatus';

function Home() {
  const backendStatus = useBackendStatus();

  return (
    <div>
      <h1>Frontend React</h1>
      <p>Status do backend: {backendStatus}</p>
      <p>dddddddddddddddddddddddddddddddddddddd</p>
    </div>
  );
}

export default Home;