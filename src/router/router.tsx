import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import SignIn from '../pages/SignIn/SignIn';
import Welcome from '../pages/Welcome/Welcome';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SignUp from '../pages/SignUp/SignUp';
import { AppRoutes } from '../utils/enums';
import Layout from '../components/Layout/Layout';

export const routesConfig = [
  {
    path: AppRoutes.layout,
    element: <Layout />,
    children: [
      {
        path: AppRoutes.main,
        element: <Main />,
        errorElement: <ErrorPage />,
      },
      {
        path: AppRoutes.signIn,
        element: <SignIn />,
        errorElement: <ErrorPage />,
      },
      {
        path: AppRoutes.signUp,
        element: <SignUp />,
        errorElement: <ErrorPage />,
      },
      {
        index: true,
        element: <Welcome />,
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export const appRouter = createBrowserRouter(routesConfig);
