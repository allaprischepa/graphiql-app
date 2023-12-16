import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import SignIn from '../pages/SignIn/SignIn';
import Welcome from '../pages/Welcome/Welcome';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SignUp from '../pages/SignUp/SignUp';
import { AppRoutes } from '../utils/enums';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';

export const routesConfig = [
  {
    path: AppRoutes.main,
    element: (
      <ProtectedRoute redirectPath={AppRoutes.signIn}>
        <Main />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: AppRoutes.signIn,
    element: (
      <PrivateRoute redirectPath={AppRoutes.main}>
        <SignIn />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: AppRoutes.signUp,
    element: (
      <PrivateRoute redirectPath={AppRoutes.main}>
        <SignUp />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: AppRoutes.welcome,
    element: (
      <PrivateRoute redirectPath={AppRoutes.main}>
        <Welcome />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
];

export const appRouter = createBrowserRouter(routesConfig);
