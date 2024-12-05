import { store } from '../../src/state/store';

const getTypeFromHistory = () => {
  return store
    .getState()
    .documentation.history.find((type) => type.name === 'test string');
};

export default getTypeFromHistory;
