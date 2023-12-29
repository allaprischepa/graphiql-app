import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '../../languages/langContext';
import { GO_HOME, NOT_FOUND_TEXT, NOT_FOUND_TITLE } from '../../constants';

import Footer from '../../components/Footer/Footer';

export default function NotFoundPage() {
  const {
    dispatch: { translate },
  } = useContext(langContext);

  return (
    <>
      <main className="error-page">
        <img className="error-pic" src="/favicon.png" alt="logo" />
        <div>
          <h2>{translate(NOT_FOUND_TITLE)}</h2>
          <p>{translate(NOT_FOUND_TEXT)}</p>
        </div>
        <Link className="button" to="/">
          {translate(GO_HOME)}
        </Link>
      </main>
      <Footer />
    </>
  );
}
