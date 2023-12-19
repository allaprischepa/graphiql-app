import { useDispatch, useSelector } from 'react-redux';
import { updateIsActive } from '../../state/documentation/documentationSlice';
import { RootState } from '../../state/store';
import './DocBtn.scss';

function DocBtn() {
  const dispatch = useDispatch();
  const isActive = useSelector(
    (state: RootState) => state.documentation.isActive
  );

  const handleDocClick = () => {
    dispatch(updateIsActive(!isActive));
  };

  return (
    <button className="doc-btn" onClick={handleDocClick}>
      <img src="docs.svg" alt="documentation" width={40} />
    </button>
  );
}

export default DocBtn;
