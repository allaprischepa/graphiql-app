import { describe, it, expect } from 'vitest';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { AppRoutes, routesConfig } from '../src/router/router';
import { render, screen } from '@testing-library/react';
import { FIRST_ELEM } from '../src/constants';

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

    const signIn = await screen.findAllByText(/Sign In/);
    expect(signIn[FIRST_ELEM]).toBeInTheDocument();
  });
});

describe('Sign Up Page', () => {
  it('is displayed when navigating to the corresponding route', async () => {
    const route = AppRoutes.signUp;
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    });

    render(<RouterProvider router={router} />);

    const signUp = await screen.findAllByText(/Sign Up/);
    expect(signUp[FIRST_ELEM]).toBeInTheDocument();
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
