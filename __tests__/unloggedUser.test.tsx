import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { AppRoutes } from '../src/utils/enums';
import userEvent from '@testing-library/user-event';
import { renderAppWithRoute } from './test-utils/test-utils';

describe('Redirection and navigation if user does not log in', async () => {
  it('Redirect to Sign In page if navigate to Main page'),
    () => {
      const router = renderAppWithRoute(AppRoutes.main);

      expect(router.state.location.pathname).toContain(AppRoutes.signIn);
    };

  it('Header contains Sign In and Sign Up buttons'),
    () => {
      renderAppWithRoute(AppRoutes.signIn);

      const signInBtn = screen.getByRole('link', { name: /sign in/i });
      const signUpBtn = screen.getByRole('link', { name: /sign in/i });
      const signOutBtn = screen.queryByTestId('sign-out-btn');

      expect(signInBtn).toBeInTheDocument();
      expect(signUpBtn).toBeInTheDocument();
      expect(signOutBtn).not.toBeInTheDocument();
    };

  it('Logo button leads to Welcome page'),
    async () => {
      const router = renderAppWithRoute(AppRoutes.signIn);
      const user = userEvent.setup();

      const logoBtn = await screen.findByRole('link', {
        name: /logo reactivebuqlya/i,
      });

      await user.click(logoBtn);

      expect(router.state.location.pathname).toContain(AppRoutes.welcome);
    };
});
