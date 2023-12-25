import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../src/utils/enums';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useContext, useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInForm } from '../../types/forms';
import { validationSchemaSignIn } from '../../utils/validationRules';
import { userAuth } from '../../services/firebaseAuth';

import { EmailField } from '../../components/FormFields/EmailField';
import { PasswordField } from '../../components/FormFields/PasswordField';
import { setIsUserLoggedIn } from '../../services/authSlice';

import LoaderBtn from '../../components/LoaderBtn/LoaderBtn';
import { langContext } from '../../languages/langContext';
import { RU_EN } from '../../constants';

import '../SignUp/SignUp.scss';

export default function SignIn() {
  const [isLoggingIn, setLoggingIn] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    dispatch: { translate },
  } = useContext(langContext);

  const form = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchemaSignIn),
  });
  const { register, handleSubmit, trigger, formState } = form;
  const { errors, isValid } = formState;

  const onFormSubmit = async (data: SignInForm): Promise<void> => {
    setLoggingIn(true);
    try {
      await userAuth.logInWithEmailAndPassword(data);
      navigate(AppRoutes.main);
      dispatch(setIsUserLoggedIn(true));
    } catch (err) {
      alert(err);
    } finally {
      setLoggingIn(false);
    }
  };

  useEffect(() => {
    trigger();
  }, [translate, trigger]);

  return (
    <main>
      <section className="sign-section">
        <div className="sign-container">
          <div className="sign-title" data-testid="sign-in-title">
            {translate(RU_EN.HEADER_NAV.SIGN_IN)}
          </div>
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="sign-form"
            data-testid="sign-in-form"
            noValidate
          >
            <div className="fields-container">
              <EmailField {...{ register, errors }}></EmailField>
              <PasswordField {...{ register, errors }}></PasswordField>
            </div>
            <button type="submit" disabled={!isValid} className="submit-btn">
              {isLoggingIn ? (
                <LoaderBtn />
              ) : (
                translate(RU_EN.FORMS.BUTTON.SIGN_IN)
              )}
            </button>
          </form>
          <div className="sign-text">
            {translate(RU_EN.FORMS.QUESTION.SIGN_IN)}{' '}
            <Link to={AppRoutes.signUp} className="sign-link">
              {translate(RU_EN.FORMS.LINK.SIGN_IN)}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
