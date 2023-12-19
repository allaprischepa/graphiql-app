import { useDispatch, useSelector } from 'react-redux';
import { updateHistory } from '../../state/documentation/documentationSlice';
import { RootState } from '../../state/store';
import './DocNav.scss';

function DocNav() {
  const dispatch = useDispatch();
  const history = useSelector(
    (state: RootState) => state.documentation.history
  );

  const handleClick = (): void => {
    const prev = history.slice(0, history.length - 1);
    dispatch(updateHistory(prev));
  };

  return (
    <>
      {history.length > 1 && (
        <button className="doc-nav" onClick={handleClick}>
          {history[history.length - 2].name}
        </button>
      )}
    </>
  );
}

export default DocNav;
