import * as yup from 'yup';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInForm } from '../../types/formsData';

import styles from './SignIn.module.scss';

export default function SignIn() {
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup.string().email().required('enter your e-mail'),
    password: yup
      .string()
      .required('enter your password')
      .min(8, 'at least 8 characters')
      .matches(/\p{Number}/gu, 'at least 1 number')
      .matches(/\p{Letter}/gu, 'at least 1 letter')
      .matches(/\p{Symbol}|\p{Punctuation}/gu, 'at least 1 special character'),
  });

  const form = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  });
  const { register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  const onFormSubmit = (data: SignInForm): void => {
    console.log(data);
    navigate('/graphiql');
  };

  return (
    <>
      <div className={styles.title}>Sign In</div>
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
              type="password"
              id="password"
              {...register('password')}
            ></input>
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
          SIGN IN
        </button>
      </form>
    </>
  );
}
