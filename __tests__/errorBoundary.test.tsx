import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../src/components/ErrorBoundary/ErrorBoundary';

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => vi.fn(),
  useRouteError: () => vi.fn(),
  isRouteErrorResponse: () => vi.fn(),
}));

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    const testText = 'Lorem ipsum';
    render(
      <ErrorBoundary>
        <div>{testText}</div>
      </ErrorBoundary>
    );

    const childElementText = screen.getByText(testText);
    expect(childElementText).toBeInTheDocument();
  });

  it('renders ErrorPage when there is an error', () => {
    const spyConsoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => null);

    const ErrorComponent = () => {
      throw new Error();
    };

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    const errorPageElement = screen.getByText(/Sorry... The error occurred/i);
    expect(errorPageElement).toBeInTheDocument();

    spyConsoleError.mockRestore();
  });

  it('logs error information to the console', () => {
    const spyConsoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => null);

    const errorMessage = 'Praesent porttitor nulla';
    const ErrorComponent = () => {
      throw new Error(errorMessage);
    };

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(spyConsoleError).toHaveBeenCalledWith(
      'Uncaught error:',
      expect.objectContaining({
        message: expect.stringContaining(errorMessage),
      }),
      expect.any(Object)
    );

    spyConsoleError.mockRestore();
  });
});
