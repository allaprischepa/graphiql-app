import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import SignIn from '../pages/SignIn/SignIn';
import Welcome from '../pages/Welcome/Welcome';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SignUp from '../pages/SignUp/SignUp';
import { AppRoutes } from '../utils/enums';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';

import Layout from '../components/Layout/Layout';

export const routesConfig = [
  {
    path: AppRoutes.layout,
    element: <Layout />,
    children: [
      {
        path: AppRoutes.layout,
        element: <Navigate to={AppRoutes.welcome} />,
        errorElement: <ErrorPage />,
      },
      {
        path: AppRoutes.main,
        element: (
          <ProtectedRoute redirectPath={AppRoutes.welcome}>
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
        element: <Welcome />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export const appRouter = createBrowserRouter(routesConfig);
