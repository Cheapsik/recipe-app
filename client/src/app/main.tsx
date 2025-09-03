import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss';
import RecipeApp from './RecipeApp.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RecipeApp />
    </BrowserRouter>
  </StrictMode>,
);
