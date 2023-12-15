import { describe, it, expect, vi } from 'vitest';
import { routesConfig } from '../src/router/router';
import { AppRoutes, Languages } from '../src/utils/enums';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { validMessages } from '../src/utils/validationRules';
import LangState from '../src/languages/LangState';

describe('Sign In Page', () => {
  const route = AppRoutes.signIn;
  const router = createMemoryRouter(routesConfig, {
    initialEntries: [route],
  });

  it('Render Sign In elements', async () => {
    render(
      <LangState initialState={{ language: Languages.EN }}>
        <RouterProvider router={router} />
      </LangState>
    );

    expect(screen.getByTestId('sign-in-title')).toBeInTheDocument();
    expect(screen.getByTestId('email-field')).toBeInTheDocument();
    expect(screen.getByTestId('password-field')).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /sign in/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/don't have an account\?/i)).toBeInTheDocument();
  });

  it('Validate e-mail field correctly', async () => {
    render(
      <LangState initialState={{ language: Languages.EN }}>
        <RouterProvider router={router} />
      </LangState>
    );
    const user = userEvent.setup();

    const emailInput = screen.getByRole('textbox', { name: /e\-mail:/i });

    await user.type(emailInput, 'wrong-email.com');
    expect(
      screen.getByText(/email must be a valid email/i)
    ).toBeInTheDocument();
    await user.clear(emailInput);

    await user.type(emailInput, 'correct-email@mail.com');
    expect(
      screen.queryByText('email must be a valid email')
    ).not.toBeInTheDocument();
    await user.clear(emailInput);

    expect(screen.getByText(validMessages.email.required)).toBeInTheDocument();
  });

  it('Validate password field correctly', async () => {
    render(
      <LangState initialState={{ language: Languages.EN }}>
        <RouterProvider router={router} />
      </LangState>
    );
    const user = userEvent.setup();

    const passwordInput = screen.getByLabelText(/password:/i);

    await user.type(passwordInput, '123');
    expect(screen.getByText(validMessages.password.min)).toBeInTheDocument();
    await user.clear(passwordInput);

    await user.type(passwordInput, '12345678letters');
    expect(
      screen.getByText(validMessages.password.hasSpecial)
    ).toBeInTheDocument();
    await user.clear(passwordInput);

    await user.type(passwordInput, '12345678!');
    expect(
      screen.getByText(validMessages.password.hasLetter)
    ).toBeInTheDocument();
    await user.clear(passwordInput);

    await user.type(passwordInput, 'letters!');
    expect(
      screen.getByText(validMessages.password.hasNumber)
    ).toBeInTheDocument();
    await user.clear(passwordInput);

    expect(
      screen.getByText(validMessages.password.required)
    ).toBeInTheDocument();
  });

  it('User can switch password visibility', async () => {
    render(
      <LangState initialState={{ language: Languages.EN }}>
        <RouterProvider router={router} />
      </LangState>
    );
    const user = userEvent.setup();

    const passwordInput = screen.getByLabelText(/password:/i);
    const passwordVisibiliySwitcher = screen.getByTestId('password-eye');

    expect(passwordInput).toHaveAttribute('type', 'password');
    await user.click(passwordVisibiliySwitcher);
    expect(passwordInput).toHaveAttribute('type', 'text');
    await user.click(passwordVisibiliySwitcher);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('Submit form only with correct data', async () => {
    const mockSubmit = vi.fn();
    render(
      <LangState initialState={{ language: Languages.EN }}>
        <RouterProvider router={router} />
      </LangState>
    );
    const user = userEvent.setup();

    const signUpForm = screen.getByTestId('sign-in-form');
    signUpForm.onsubmit = mockSubmit;

    const submitButton = screen.getByRole('button', { name: /sign in/i });
    await user.click(submitButton);

    expect(mockSubmit).not.toHaveBeenCalled();

    const emailInput = screen.getByRole('textbox', { name: /e\-mail:/i });
    const passwordInput = screen.getByLabelText(/password:/i);

    await user.type(emailInput, 'correct-email@mail.com');
    await user.type(passwordInput, '12345678letters!');

    await user.click(submitButton);

    expect(mockSubmit).toHaveBeenCalled();
  });

  it('Navigate to page Sign Up with link below the form', async () => {
    render(
      <LangState initialState={{ language: Languages.EN }}>
        <RouterProvider router={router} />
      </LangState>
    );
    const user = userEvent.setup();

    await user.click(screen.getByRole('link', { name: /sign up!/i }));

    expect(router.state.location.pathname).toContain(AppRoutes.signUp);
  });
});
