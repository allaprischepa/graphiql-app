import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../state/store';

const ProtectedRoute = ({
  redirectPath,
  children,
}: {
  redirectPath: string;
  children: JSX.Element;
}) => {
  const isUserLoggedIn = useAppSelector('auth', 'isUserLoggedIn');

  if (!isUserLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
