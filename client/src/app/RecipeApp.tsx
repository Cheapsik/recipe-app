import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeRedirect from '../features/auth/pages/HomeRedirect/HomeRedirect';
import LoginPage from '../features/auth/pages/LoginPage/LoginPage';
import AdminDashboard from '../features/admin/pages/AdminDashboard/AdminDashboard';
import UserDashboard from '../features/user/pages/UserDashboard/UserDashboard';
import ProtectedRoute from '../features/auth/pages/ProtectedRoute/ProtectedRoute';

const RecipeApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRedirect />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute roles={['user']}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RecipeApp;
