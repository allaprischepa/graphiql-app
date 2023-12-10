import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpForm } from '../../types/formsData';
import { validationSchemaSignUp } from '../../utils/validationRules';

import styles from './SignUp.module.scss';

export default function SignUp() {
  const navigate = useNavigate();

  const form = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchemaSignUp),
  });
  const { register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  const onFormSubmit = (data: SignUpForm): void => {
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
