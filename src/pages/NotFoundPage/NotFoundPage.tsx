import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="error-page">
      <div className="error-message">
        <div>Sorry... The page is not found.</div>
        <div>Please, go to Home page.</div>
      </div>
      <Link className="button home-link" to="/">
        Go Home
      </Link>
    </div>
  );
}
