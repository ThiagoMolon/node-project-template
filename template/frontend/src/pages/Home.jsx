import { useBackendStatus } from '../hooks/useBackendStatus';
import Vine from '../assets/vite' ;

function Home() {
  const backendStatus = useBackendStatus();

  return (
    <div>
      <h1>Frontend React</h1>
      <p>Status do backend: {backendStatus}</p>
      <Vine />
    </div>
  );
}

export default Home;