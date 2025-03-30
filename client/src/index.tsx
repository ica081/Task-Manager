// client/src/index.tsx
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './auth/AuthContext';

const container = document.getElementById('root');
const root = createRoot(container!); // O '!' afirma que container não é null

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);