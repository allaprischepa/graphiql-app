import { describe, it, expect } from 'vitest';
import { routesConfig } from '../src/router/router';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Hero from '../src/components/Hero/Hero';
import Features from '../src/components/Features/Features';
import Team from '../src/components/Team/Team';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { FIRST_ELEM } from '../src/constants';

describe('Welcome Page', () => {
  it('Hero displayed on welcome page', async () => {
    render(<Hero />);

    const graphiQL = await screen.findByText('GraphiQL');
    expect(graphiQL).toBeInTheDocument();
  });

  it('Features displayed on welcome page', async () => {
    render(<Features />);

    const features = await screen.findByText(/Features/);
    expect(features).toBeInTheDocument();
  });

  it('Our team displayed on welcome page', async () => {
    render(<Team />);

    const team = await screen.findByText(/Our team/);
    expect(team).toBeInTheDocument();
  });

  it('Should navigate to page Sign In on button click', async () => {
    const router = createMemoryRouter(routesConfig);

    render(<RouterProvider router={router} />);
    const user = userEvent.setup();

    expect(screen.getByText(/Sign In/i)).toBeInTheDocument();

    await user.click(screen.getByText(/Sign In/i));
    expect(
      (await screen.findAllByText(/Sign In/i))[FIRST_ELEM]
    ).toBeInTheDocument();
  });

  it('Should navigate to page Sign Up on button click', async () => {
    const router = createMemoryRouter(routesConfig);

    render(<RouterProvider router={router} />);
    const user = userEvent.setup();

    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();

    await user.click(screen.getByText(/Sign Up/i));
    expect(screen.getAllByText(/Sign Up/i)[FIRST_ELEM]).toBeInTheDocument();
  });
});
