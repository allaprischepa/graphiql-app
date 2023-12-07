import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';
import { HttpStatusCode } from '../../utils/enums';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  const pageReload = () => navigate(0);

  if (isRouteErrorResponse(error) && error.status === HttpStatusCode.NOT_FOUND)
    return <NotFoundPage />;

  return (
    <div className="error-page">
      <div className="error-message">
        <div>Sorry... The error occurred.</div>
        <div>Please, try to reload page</div>
      </div>
      <button className="reload-button" onClick={pageReload}>
        Reload page
      </button>
    </div>
  );
}
