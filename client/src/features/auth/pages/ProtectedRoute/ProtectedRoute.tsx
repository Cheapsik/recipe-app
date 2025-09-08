import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../../app/hooks/hooks';
import type { JSX } from 'react';

type Props = { children: JSX.Element; roles?: string[] };

export const ProtectedRoute: React.FC<Props> = ({ children, roles }) => {
  const user = useAppSelector((s) => s.auth.user);

  if (!user) return <Navigate to="/login" replace />;

  if (roles && roles.length > 0) {
    const role = (user.role ?? '').toString().toLowerCase();
    const allowed = roles.map((r) => r.toLowerCase());
    if (!allowed.includes(role)) return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
