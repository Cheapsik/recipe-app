import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss';
import RecipeApp from './RecipeApp.tsx';
import { AppProvider } from './providers.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <RecipeApp />
    </AppProvider>
  </StrictMode>,
);
