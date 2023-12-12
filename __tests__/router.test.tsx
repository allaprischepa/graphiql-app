import { describe, it, expect } from 'vitest';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { AppRoutes, routesConfig } from '../src/router/router';
import { render, screen } from '@testing-library/react';
import { TEST_ID as MAIN_PAGE_TEST_ID } from '../src/pages/Main/Main';
import { Provider } from 'react-redux';
import { configureAppStore } from '../src/state/store';

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

    render(<RouterProvider router={router} />);

    const signIn = await screen.findByText(/Sign In/);
    expect(signIn).toBeInTheDocument();
  });
});

describe('Sign Up Page', () => {
  it('is displayed when navigating to the corresponding route', async () => {
    const route = AppRoutes.signUp;
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    });

    render(<RouterProvider router={router} />);

    const signUp = await screen.findByText(/Sign Up/);
    expect(signUp).toBeInTheDocument();
  });
});

describe('Welcome Page', () => {
  it('is displayed when navigating to the corresponding route', async () => {
    const route = AppRoutes.welcome;
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    });

    render(<RouterProvider router={router} />);

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
