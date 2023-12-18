import { describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { AppRoutes } from '../src/utils/enums';
import {
  fixCodeMirrorTypeError,
  logInWithUserCredentials,
  renderApp,
  renderAppWithRoute,
} from './test-utils/test-utils';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

fixCodeMirrorTypeError();

describe('Redirection and navigation if user logs in', async () => {
  const router = renderAppWithRoute(AppRoutes.signIn);
  await logInWithUserCredentials();

  it('Redirect to Main page', async () => {
    renderApp(router);

    await waitFor(() => {
      expect(router.state.location.pathname).toContain(AppRoutes.main);
    });
  });

  it('Redirect to Main page if navigate to another pages', async () => {
    act(() => {
      renderApp(router);
      router.navigate(AppRoutes.signIn);
    });

    expect(router.state.location.pathname).toContain(AppRoutes.main);

    act(() => {
      renderApp(router);
      router.navigate(AppRoutes.signUp);
    });

    expect(router.state.location.pathname).toContain(AppRoutes.main);

    act(() => {
      renderApp(router);
      router.navigate(AppRoutes.signUp);
    });

    expect(router.state.location.pathname).toContain(AppRoutes.main);
  });

  it('Header does not contain Sign In and Sign Up buttons', async () => {
    renderApp(router);

    await waitFor(() => {
      const signInBtn = screen.queryByRole('link', { name: /sign in/i });
      const signUpBtn = screen.queryByRole('link', { name: /sign up/i });
      const signOutBtn = screen.getByTestId('sign-out-btn');

      expect(signInBtn).not.toBeInTheDocument();
      expect(signUpBtn).not.toBeInTheDocument();
      expect(signOutBtn).toBeInTheDocument();
    });
  });

  it('Logo button leads to Main page', async () => {
    renderApp(router);

    await waitFor(async () => {
      const logoBtn = screen.getByRole('link', {
        name: /logo reactivebuqlya/i,
      });
      const user = userEvent.setup();
      await user.click(logoBtn);
      expect(router.state.location.pathname).toContain(AppRoutes.main);
    });
  });

  it('Redirect to Welcome page if user logs out', async () => {
    renderApp(router);

    await waitFor(async () => {
      const signOutBtn = screen.getByTestId('sign-out-btn');
      const user = userEvent.setup();
      await user.click(signOutBtn);
      expect(router.state.location.pathname).toContain(AppRoutes.welcome);
    });
  });
});
