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
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export const routesConfig = [
  {
    path: AppRoutes.notFound,
    element: <NotFoundPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: AppRoutes.layout,
    element: <Layout />,
    children: [
      {
        path: AppRoutes.layout,
        element: <Navigate to={AppRoutes.welcome} />,
      },
      {
        path: AppRoutes.main,
        element: (
          <ProtectedRoute redirectPath={AppRoutes.welcome}>
            <Main />
          </ProtectedRoute>
        ),
      },
      {
        path: AppRoutes.signIn,
        element: (
          <PrivateRoute redirectPath={AppRoutes.main}>
            <SignIn />
          </PrivateRoute>
        ),
      },
      {
        path: AppRoutes.signUp,
        element: (
          <PrivateRoute redirectPath={AppRoutes.main}>
            <SignUp />
          </PrivateRoute>
        ),
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
