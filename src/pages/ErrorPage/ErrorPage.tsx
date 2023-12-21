import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';
import { HttpStatusCode } from '../../utils/enums';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Footer from '../../components/Footer/Footer';
import './ErrorPage.scss';
import { useContext } from 'react';
import { langContext } from '../../languages/langContext';
import {
  ERROR_PAGE_TEXT,
  ERROR_PAGE_TITLE,
  RELOAD_PAGE,
} from '../../constants';

export default function ErrorPage() {
  const {
    dispatch: { translate },
  } = useContext(langContext);

  const error = useRouteError();
  const navigate = useNavigate();
  const pageReload = () => navigate(0);

  if (isRouteErrorResponse(error) && error.status === HttpStatusCode.NOT_FOUND)
    return (
      <>
        <NotFoundPage />
        <Footer />
      </>
    );

  return (
    <>
      <main className="error-page">
        <img className="error-pic" src="favicon.png" alt="logo" />
        <div>
          <h2>{translate(ERROR_PAGE_TITLE)}</h2>
          <p>{translate(ERROR_PAGE_TEXT)}</p>
        </div>
        <button className="button" onClick={pageReload}>
          {translate(RELOAD_PAGE)}
        </button>
      </main>
      <Footer />
    </>
  );
}
