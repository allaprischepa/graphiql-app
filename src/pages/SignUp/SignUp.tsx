import * as yup from 'yup';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpFormData } from '../../types/formsData';

import styles from './SignUp.module.scss';

export default function SignUp() {
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('enter your name')
      .max(32, 'at most 32 characters')
      .matches(/^\p{Letter}/u, 'start with letter'),
    email: yup.string().email().required('enter your e-mail'),
    password: yup
      .string()
      .required('enter your password')
      .min(8, 'at least 8 characters')
      .matches(/\p{Number}/gu, 'at least 1 number')
      .matches(/\p{Letter}/gu, 'at least 1 letter')
      .matches(/\p{Symbol}|\p{Punctuation}/gu, 'at least 1 special character'),
    confirmPassword: yup
      .string()
      .required('confirm your password')
      .oneOf([yup.ref('password')], 'passwords must match'),
  });

  const form = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  });
  const { register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  const onFormSubmit = (data: SignUpFormData): void => {
    console.log(data);
    navigate('/sign-in');
  };

  return (
    <>
      <div className={styles.title}>Sign Up</div>
      <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
        <div className={styles.fieldsContainer}>
          <div className={styles.field}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" {...register('name')}></input>
          </div>
          {errors.name && (
            <p className={styles.errorMessage}>{errors.name.message}</p>
          )}
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
          <div className={styles.field}>
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword')}
            ></input>
          </div>
          {errors.confirmPassword && (
            <p className={styles.errorMessage}>
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className={styles.submitButton}
        >
          SIGN UP
        </button>
      </form>
    </>
  );
}
