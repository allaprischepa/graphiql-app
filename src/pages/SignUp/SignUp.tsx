import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../src/utils/enums';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpForm } from '../../types/forms';
import { validationSchemaSignUp } from '../../utils/validationRules';
import { userAuth } from '../../services/firebaseAuth';

import { NameField } from '../../components/FormFields/NameField';
import { EmailField } from '../../components/FormFields/EmailField';
import { PasswordField } from '../../components/FormFields/PasswordField';
import { PasswordFieldConfirm } from '../../components/FormFields/PasswordConfirmField';

import LoaderBtn from '../../components/LoaderBtn/LoaderBtn';
import { langContext } from '../../languages/langContext';
import { RU_EN } from '../../constants';

import './SignUp.scss';

export default function SignUp() {
  const [isRegistering, setIsRegistering] = useState(false);

  const navigate = useNavigate();
  const {
    dispatch: { translate },
  } = useContext(langContext);

  const form = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchemaSignUp),
  });
  const { register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  const onFormSubmit = async (data: SignUpForm): Promise<void> => {
    setIsRegistering(true);
    try {
      await userAuth.registerWithEmailAndPassword(data);
      navigate(AppRoutes.signIn);
    } catch (err) {
      alert(err);
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <main>
      <section className="sign-section">
        <div className="sign-container">
          <div className="sign-title" data-testid="sign-up-title">
            {translate(RU_EN.HEADER_NAV.SIGN_UP)}
          </div>
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="sign-form"
            data-testid="sign-up-form"
            noValidate
          >
            <div className="fields-container">
              <NameField {...{ register, errors }} />
              <EmailField {...{ register, errors }} />
              <PasswordField {...{ register, errors }} />
              <PasswordFieldConfirm {...{ register, errors }} />
            </div>
            <button type="submit" disabled={!isValid} className="submit-btn">
              {isRegistering ? (
                <LoaderBtn />
              ) : (
                translate(RU_EN.FORMS.BUTTON.SIGN_UP)
              )}
            </button>
          </form>
          <div className="sign-text">
            {translate(RU_EN.FORMS.QUESTION.SIGN_UP)}{' '}
            <Link to={AppRoutes.signIn} className="sign-link">
              {translate(RU_EN.FORMS.LINK.SIGN_UP)}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
