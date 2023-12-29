import Modal from 'react-modal';
import './ApiBtn.scss';
import { useContext, useState } from 'react';
import { useAppSelector } from '../../state/store';
import { langContext } from '../../languages/langContext';
import {
  API_ENDPOINT,
  API_SETTINGS,
  API_URL,
  ENDPOINT_SETUP_INTRO,
  ENDPOINT_SETUP_LABEL,
  ENDPOINT_SETUP_SAVE,
  REVERT_TEXT,
} from '../../constants';
import { useForm } from 'react-hook-form';
import { validationSchemaEndpoint } from '../../utils/validationRules';
import { yupResolver } from '@hookform/resolvers/yup';
import { EndpointUrlField } from '../FormFields/EndpointUrlField';
import { useDispatch } from 'react-redux';
import { setEndpoint } from '../../state/request/requestSlice';
import { graphqlApi } from '../../api/graphqlApi';

function ApiBtn() {
  const endpoint = useAppSelector('request', 'endpoint');
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    values: {
      endpointUrl: endpoint,
    },
    mode: 'all',
    resolver: yupResolver(validationSchemaEndpoint),
  });

  const {
    dispatch: { translate },
  } = useContext(langContext);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const onFormSubmit = (data: { endpointUrl: string }) => {
    const newEndpoint = data.endpointUrl;

    if (newEndpoint !== endpoint) {
      localStorage.setItem(API_ENDPOINT, newEndpoint);
      dispatch(setEndpoint(newEndpoint));
      dispatch(graphqlApi.util.resetApiState());
    }

    closeModal();
  };

  const handleClose = () => {
    reset();
    closeModal();
  };

  return (
    <>
      <button
        className="settings-btn"
        onClick={openModal}
        title={translate(API_SETTINGS)}
        data-testid="api-btn"
      >
        <img src="api.svg" alt="settings" width={40} />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        ariaHideApp={false}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-header">
          <h3>{translate(API_SETTINGS)}</h3>
          <button onClick={handleClose} className="close-btn" />
        </div>
        <p className="intro">{translate(ENDPOINT_SETUP_INTRO)}</p>
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="api-settings-form"
        >
          <EndpointUrlField
            register={register('endpointUrl')}
            labelText={translate(ENDPOINT_SETUP_LABEL)}
            errors={errors}
            revertEndpoint={() =>
              setValue('endpointUrl', API_URL, { shouldValidate: true })
            }
            revertText={translate(REVERT_TEXT)}
          />
          <input
            type="submit"
            value={translate(ENDPOINT_SETUP_SAVE)}
            disabled={!isValid}
            className="submit-btn"
          />
        </form>
      </Modal>
    </>
  );
}

export default ApiBtn;
