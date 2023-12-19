/* import { describe, it, expect } from 'vitest';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routesConfig } from '../src/router/router';
import { render, screen } from '@testing-library/react';
import { AppRoutes } from '../src/utils/enums';
import {
  fixCodeMirrorTypeError,
  logInWithUserCredentials,
  renderAppWithRoute,
} from './test-utils/test-utils';
import { TEST_ID as MAIN_PAGE_TEST_ID } from '../src/pages/Main/Main';

fixCodeMirrorTypeError();

describe('404 Page', () => {
  it('is displayed when navigating to an invalid route', async () => {
    const invalidRoute = '/vivamus-in-erat';
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [invalidRoute],
    });

    render(<RouterProvider router={router} />);

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
    renderAppWithRoute(AppRoutes.signIn);
    await logInWithUserCredentials();

    const mainPage = await screen.findByTestId(MAIN_PAGE_TEST_ID);
    expect(mainPage).toBeInTheDocument();
  });
}); */
