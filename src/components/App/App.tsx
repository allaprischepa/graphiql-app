import { RouterProvider } from 'react-router-dom';
import { appRouter } from '../../router/router';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import './Toastify.scss';

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
      <ToastContainer />
    </>
  );
}

export default App;
