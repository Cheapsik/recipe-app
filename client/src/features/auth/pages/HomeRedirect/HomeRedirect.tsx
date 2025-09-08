import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../../app/hooks/hooks';
import { jwtDecode } from 'jwt-decode';

type DecodedToken = {
  role?: string;
  sub?: string;
  username?: string;
};

const HomeRedirect: React.FC = () => {
  const navigate = useNavigate();
  const user = useAppSelector((s) => s.auth.user);

  useEffect(() => {
    if (user) {
      const role = (user.role ?? '').toString().toLowerCase();
      if (role === 'admin') navigate('/admin', { replace: true });
      else navigate('/user', { replace: true });
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login', { replace: true });
      return;
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token);

      if (decoded?.role === 'admin') navigate('/admin', { replace: true });
      else if (decoded?.role === 'user') navigate('/user', { replace: true });
      else navigate('/login', { replace: true });
    } catch {
      navigate('/login', { replace: true });
    }
  }, [user, navigate]);

  return null;
};

export default HomeRedirect;
