import { describe, it, expect, vi } from 'vitest';
import { AppRoutes, routesConfig } from '../src/router/router';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { FIRST_ELEM } from '../src/constants';
import { validMessages } from '../src/utils/validationRules';

describe('Sign Up Page', () => {
  const route = AppRoutes.signUp;
  const router = createMemoryRouter(routesConfig, {
    initialEntries: [route],
  });

  it('Render Sign Up elements', async () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByTestId('sign-up-title')).toBeInTheDocument();
    expect(screen.getByTestId('name-field')).toBeInTheDocument();
    expect(screen.getByTestId('email-field')).toBeInTheDocument();
    expect(screen.getByTestId('password-field')).toBeInTheDocument();
    expect(screen.getByTestId('confirm-password-field')).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /sign up/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument();
  });

  it('Validate name field correctly', async () => {
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();

    const nameInput = screen.getByRole('textbox', { name: /name:/i });

    await user.type(nameInput, '123User');
    expect(
      screen.getByText(validMessages.name.startLetter)
    ).toBeInTheDocument();
    await user.clear(nameInput);

    expect(screen.getByText(validMessages.name.required)).toBeInTheDocument();
  });

  it('Validate confirm password field correctly', async () => {
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();

    const passwordInput = screen.getAllByLabelText(/password:/i)[FIRST_ELEM];
    const confirmPasswordInput = screen.getByLabelText(/confirm password:/i);

    await user.type(passwordInput, '12345678letters!');
    await user.type(confirmPasswordInput, '12345678');

    expect(
      screen.getByText(validMessages.confirmPassword.matchPassword)
    ).toBeInTheDocument();
    await user.clear(confirmPasswordInput);

    await user.type(confirmPasswordInput, '12345678letters!');
    expect(
      screen.queryByText(validMessages.confirmPassword.matchPassword)
    ).not.toBeInTheDocument();
  });

  it('User can switch confirm password visibility', async () => {
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();

    const confirmPasswordInput = screen.getByLabelText(/confirm password:/i);
    const passwordVisibiliySwitcher = screen.getByTestId(
      'confirm-password-eye'
    );

    expect(confirmPasswordInput).toHaveAttribute('type', 'password');
    await user.click(passwordVisibiliySwitcher);
    expect(confirmPasswordInput).toHaveAttribute('type', 'text');
    await user.click(passwordVisibiliySwitcher);
    expect(confirmPasswordInput).toHaveAttribute('type', 'password');
  });

  it('Submit form only with correct data', async () => {
    const mockSubmit = vi.fn();
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();

    const signUpForm = screen.getByTestId('sign-up-form');
    signUpForm.onsubmit = mockSubmit;

    const submitButton = screen.getByRole('button', { name: /sign up/i });
    await user.click(submitButton);

    expect(mockSubmit).not.toHaveBeenCalled();

    const nameInput = screen.getByRole('textbox', { name: /name:/i });
    const emailInput = screen.getByRole('textbox', { name: /e\-mail:/i });
    const passwordInput = screen.getAllByLabelText(/password:/i)[FIRST_ELEM];
    const confirmPasswordInput = screen.getByLabelText(/confirm password:/i);

    await user.type(nameInput, 'User123');
    await user.type(emailInput, 'correct-email@mail.com');
    await user.type(passwordInput, '12345678letters!');
    await user.type(confirmPasswordInput, '12345678letters!');

    await user.click(submitButton);

    expect(mockSubmit).toHaveBeenCalled();
  });

  it('Navigate to page Sign In with link below the form', async () => {
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('link', { name: /sign in!/i }));

    expect(router.state.location.pathname).toContain(AppRoutes.signIn);
  });
});
