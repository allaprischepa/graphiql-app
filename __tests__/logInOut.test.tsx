import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { AppRoutes, Languages } from '../src/utils/enums';
import { logInWithUserCredentials } from './test-utils/test-utils';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import LangState from '../src/languages/LangState';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routesConfig } from '../src/router/router';
import { configureAppStore } from '../src/state/store';

describe('Redirection if user logs in and logs out', async () => {
  it('Redirect to Main page if user logged in', async () => {
    const store = configureAppStore();
    const route = AppRoutes.signIn;
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    });

    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <RouterProvider router={router} />
        </LangState>
      </Provider>
    );

    waitFor(
      () => {
        expect(router.state.location.pathname).toContain(AppRoutes.main);
      },
      { timeout: 2000 }
    );
  });

  it('Redirect to Welcome page if user logged out', async () => {
    const store = configureAppStore();
    const route = AppRoutes.signIn;
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    });

    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <RouterProvider router={router} />
        </LangState>
      </Provider>
    );

    await logInWithUserCredentials();

    const signOutBtn = await screen.findByTestId('sign-out-btn');
    await userEvent.click(signOutBtn);

    waitFor(
      () => {
        expect(router.state.location.pathname).toContain(AppRoutes.welcome);
      },
      { timeout: 2000 }
    );
  });
});
