import { describe, it, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { AppRoutes } from '../src/utils/enums';
import { renderApp, renderAppWithRoute } from './test-utils/test-utils';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { IS_USER_LOGGED_IN } from '../src/constants';

describe('Redirection and navigation if user is logged in', async () => {
  localStorage.setItem(IS_USER_LOGGED_IN, 'true');

  vi.mock('firebase/auth', () => {
    return {
      getAuth: vi.fn().mockImplementationOnce(() => {}),
      onAuthStateChanged: vi.fn().mockImplementationOnce(() => {}),
    };
  });

  const router = renderAppWithRoute(AppRoutes.main);

  it('Redirect to Main page if navigate to another pages', async () => {
    act(() => {
      router.navigate(AppRoutes.signIn);
      renderApp(router);
    });

    expect(router.state.location.pathname).toContain(AppRoutes.main);

    act(() => {
      router.navigate(AppRoutes.signUp);
      renderApp(router);
    });

    expect(router.state.location.pathname).toContain(AppRoutes.main);

    act(() => {
      router.navigate(AppRoutes.welcome);
      renderApp(router);
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
      await userEvent.click(logoBtn);
      expect(router.state.location.pathname).toContain(AppRoutes.main);
    });
  });
});
