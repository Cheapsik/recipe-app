import { Route, Routes } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage';

const RecipeApp = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default RecipeApp;
