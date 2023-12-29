import { useDispatch, useSelector } from 'react-redux';
import { updateHistory } from '../../state/documentation/documentationSlice';
import { RootState } from '../../state/store';
import './DocType.scss';

export interface DocTypeProps {
  type: string;
}

function DocType({ type }: DocTypeProps) {
  const dispatch = useDispatch();
  const types = useSelector((state: RootState) => state.documentation.types);
  const history = useSelector(
    (state: RootState) => state.documentation.history
  );

  const handleClick = (fieldType: string): void => {
    const type = types.find(
      (type) => type.name === fieldType.replace(/\[|\]|!/g, '')
    );

    if (type) {
      dispatch(updateHistory([...history, type]));
    }
  };

  return (
    <button className="type" onClick={() => handleClick(type || '')}>
      {type}
    </button>
  );
}

export default DocType;
