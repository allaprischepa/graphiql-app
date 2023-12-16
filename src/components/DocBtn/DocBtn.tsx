import { useDispatch, useSelector } from 'react-redux';
import { updateIsActive } from '../../state/documentation/documentationSlice';
import { RootState } from '../../state/store';

function DocBtn() {
  const dispatch = useDispatch();
  const isActive = useSelector(
    (state: RootState) => state.documentation.isActive
  );

  const handleDocClick = () => {
    dispatch(updateIsActive(!isActive));
  };

  return (
    <div>
      <button onClick={handleDocClick}>doc</button>
    </div>
  );
}

export default DocBtn;
