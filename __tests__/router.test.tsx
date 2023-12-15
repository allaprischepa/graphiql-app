import { describe, it, expect } from 'vitest';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routesConfig } from '../src/router/router';
import { render, screen } from '@testing-library/react';
import { TEST_ID as MAIN_PAGE_TEST_ID } from '../src/pages/Main/Main';
import { Provider } from 'react-redux';
import { configureAppStore } from '../src/state/store';
import { AppRoutes, Languages } from '../src/utils/enums';
import LangState from '../src/languages/LangState';

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
    const route = AppRoutes.signIn;
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    });

    render(
      <LangState initialState={{ language: Languages.EN }}>
        <RouterProvider router={router} />
      </LangState>
    );

    const signIn = await screen.findByTestId('sign-in-title');
    expect(signIn).toBeInTheDocument();
  });
});

describe('Sign Up Page', () => {
  it('is displayed when navigating to the corresponding route', async () => {
    const route = AppRoutes.signUp;
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    });

    render(
      <LangState initialState={{ language: Languages.EN }}>
        <RouterProvider router={router} />
      </LangState>
    );

    const signUp = await screen.findByTestId('sign-up-title');
    expect(signUp).toBeInTheDocument();
  });
});

describe('Welcome Page', () => {
  it('is displayed when navigating to the corresponding route', async () => {
    const route = AppRoutes.welcome;
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    });

    render(
      <LangState initialState={{ language: Languages.EN }}>
        <RouterProvider router={router} />
      </LangState>
    );

    const welcome = await screen.findByText('GraphiQL');
    expect(welcome).toBeInTheDocument();
  });
});

describe('Main Page', () => {
  it('is displayed when navigating to the corresponding route', () => {
    const store = configureAppStore();
    const route = AppRoutes.main;
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    const mainPage = screen.getByTestId(MAIN_PAGE_TEST_ID);
    expect(mainPage).toBeInTheDocument();
  });
});
