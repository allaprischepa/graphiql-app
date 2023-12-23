import { describe, it, expect, vi } from 'vitest';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routesConfig } from '../src/router/router';
import { render, screen } from '@testing-library/react';
import { AppRoutes } from '../src/utils/enums';
import { renderAppWithRoute } from './test-utils/test-utils';
import { TEST_ID as MAIN_PAGE_TEST_ID } from '../src/pages/Main/Main';
import { IS_USER_LOGGED_IN } from '../src/constants';

describe('404 Page', () => {
  it('is displayed when navigating to an invalid route', async () => {
    const invalidRoute = '/vivamus-in-erat';
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [invalidRoute],
    });

    render(
      <LangState initialState={{ language: Languages.EN }}>
        <RouterProvider router={router} />
      </LangState>
    );

    const notFound = await screen.findByText(/The page is not found/);
    expect(notFound).toBeInTheDocument();
  });
});

describe('Sign In Page', () => {
  it('is displayed when navigating to the corresponding route', async () => {
    renderAppWithRoute(AppRoutes.signIn);

    const signIn = await screen.findByTestId('sign-in-title');
    expect(signIn).toBeInTheDocument();
  });
});

describe('Sign Up Page', () => {
  it('is displayed when navigating to the corresponding route', async () => {
    renderAppWithRoute(AppRoutes.signUp);

    const signUp = await screen.findByTestId('sign-up-title');
    expect(signUp).toBeInTheDocument();
  });
});

describe('Welcome Page', () => {
  it('is displayed when navigating to the corresponding route', async () => {
    renderAppWithRoute(AppRoutes.welcome);

    const welcome = await screen.findByText('GraphiQL');
    expect(welcome).toBeInTheDocument();
  });
});

describe('Main Page', () => {
  it('is displayed when navigating to the corresponding route', async () => {
    localStorage.setItem(IS_USER_LOGGED_IN, 'true');

    vi.mock('firebase/auth', () => {
      return {
        getAuth: vi.fn().mockImplementationOnce(() => {}),
        onAuthStateChanged: vi.fn().mockImplementationOnce(() => {}),
      };
    });

    renderAppWithRoute(AppRoutes.main);

    const mainPage = screen.getByTestId(MAIN_PAGE_TEST_ID);
    expect(mainPage).toBeInTheDocument();
  });
});
