import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../router/router';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInForm } from '../../types/forms';
import { validationSchemaSignIn } from '../../utils/validationRules';
import { userAuth } from '../../services/firebaseAuth';

import Header from '../../components/Header/Header';
import { EmailField } from '../../components/FormFields/EmailField';
import { PasswordField } from '../../components/FormFields/PasswordField';

import '../SignUp/SignUp.scss';

export default function SignIn() {
  const [isLoggingIn, setLoggingIn] = useState(false);

  const navigate = useNavigate();

  const form = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchemaSignIn),
  });
  const { register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  const onFormSubmit = async (data: SignInForm): Promise<void> => {
    setLoggingIn(true);
    try {
      await userAuth.logInWithEmailAndPassword(data);
      navigate(AppRoutes.main);
    } catch (err) {
      alert(err);
    } finally {
      setLoggingIn(false);
    }
  };

  return (
    <>
      <Header />
      <section className="sign-section">
        <div className="sign-container">
          <div className="sign-title" data-testid="sign-in-title">
            Sign In
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
              {isLoggingIn ? 'LOGGING IN...' : 'SIGN IN'}
            </button>
          </form>
          <div className="sign-text">
            Don&apos;t have an account?{' '}
            <Link to={AppRoutes.signUp} className="sign-link">
              Sign up!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
