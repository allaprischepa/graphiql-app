import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInForm } from '../../types/formsData';
import { validationSchemaSignIn } from '../../utils/validationRules';
import { userAuth } from '../../services/firebaseAuth';

import Header from '../../components/Header/Header';

import styles from './SignIn.module.scss';

export default function SignIn() {
  const [isOpenedPassword, setIsOpenedPassword] = useState(false);
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
      <section className={styles.signUp}>
        <div className={styles.container}>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
            <div className={styles.fieldsContainer}>
              <div className={styles.field}>
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" {...register('email')}></input>
              </div>
              {errors.email && (
                <p className={styles.errorMessage}>{errors.email.message}</p>
              )}
              <div className={styles.field}>
                <label htmlFor="password">Password:</label>
                <input
                  type={isOpenedPassword ? 'text' : 'password'}
                  id="password"
                  {...register('password')}
                ></input>
                <div
                  className={
                    isOpenedPassword
                      ? styles.passwordOpenedEye
                      : styles.passwordClosedEye
                  }
                  onClick={() => setIsOpenedPassword(!isOpenedPassword)}
                ></div>
              </div>
              {errors.password && (
                <p className={styles.errorMessage}>{errors.password.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className={styles.submitButton}
            >
              {isLoggingIn ? 'LOGGING IN...' : 'SIGN IN'}
            </button>
          </form>
          <div className={styles.signUpText}>
            Don&apos;t have an account?{' '}
            <Link to="/sign-up" className={styles.signUpLink}>
              Sign up!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
