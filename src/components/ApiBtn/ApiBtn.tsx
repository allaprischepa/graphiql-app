import Modal from 'react-modal';
import './ApiBtn.scss';
import { useContext, useState } from 'react';
import { useAppSelector } from '../../state/store';
import { langContext } from '../../languages/langContext';
import {
  API_SETTINGS,
  ENDPOINT_SETUP_INTRO,
  ENDPOINT_SETUP_LABEL,
  ENDPOINT_SETUP_SAVE,
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
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
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
    if (data.endpointUrl !== endpoint) {
      dispatch(setEndpoint(data.endpointUrl));
      dispatch(graphqlApi.util.resetApiState());
    }

    closeModal();
  };

  return (
    <>
      <button
        className="settings-btn"
        onClick={openModal}
        title={translate(API_SETTINGS)}
      >
        <img src="api.svg" alt="settings" width={40} />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-header">
          <h3>{translate(API_SETTINGS)}</h3>
          <button onClick={closeModal} className="close-btn" />
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
