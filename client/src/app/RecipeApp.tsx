import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage/LoginPage';
import AdminDashboard from '../features/auth/pages/AdminDashboard/AdminDashboard';
import UserDashboard from '../features/auth/pages/UserDashboard/UserDashboard';

const RecipeApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RecipeApp;
