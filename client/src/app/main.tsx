import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss';
import RecipeApp from './RecipeApp.tsx';
import { AppProvider } from './providers.tsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <RecipeApp />
      <ToastContainer
        position="bottom-right"
        pauseOnHover={false}
        hideProgressBar={true}
        stacked={true}
        autoClose={3000}
        limit={5}
      />
    </AppProvider>
  </StrictMode>,
);
