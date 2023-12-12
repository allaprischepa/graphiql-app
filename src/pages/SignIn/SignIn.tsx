import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInForm } from '../../types/forms';
import { validationSchema } from '../../utils/validationRules';
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
    resolver: yupResolver(validationSchema),
  });
  const { register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  const onFormSubmit = async (data: SignInForm): Promise<void> => {
    setLoggingIn(true);
    try {
      await userAuth.logInWithEmailAndPassword(data);
      navigate('/graphiql');
    } catch (err) {
      console.log(err);
      alert(err);
    } finally {
      setLoggingIn(false);
    }
  };

  return (
    <>
      <Header />
      <section className="form-section">
        <div className="form-container">
          <div className="sign-title">Sign In</div>
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="sign-form"
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
            <Link to="/sign-up" className="sign-link">
              Sign up!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
