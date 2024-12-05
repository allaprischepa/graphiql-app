import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
  const pageReload = () => navigate(0);

  return (
    <>
      <main className="error-page">
        <img className="error-pic" src="/favicon.png" alt="logo" />
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
