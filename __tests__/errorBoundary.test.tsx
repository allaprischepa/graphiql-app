import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../src/components/ErrorBoundary/ErrorBoundary';
import LangState from '../src/languages/LangState';
import { Languages } from '../src/utils/enums';
import { configureAppStore } from '../src/state/store';
import { Provider } from 'react-redux';

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
    const store = configureAppStore();
    const spyConsoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => null);

    const ErrorComponent = () => {
      throw new Error();
    };

    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <ErrorBoundary>
            <ErrorComponent />
          </ErrorBoundary>
        </LangState>
      </Provider>
    );

    const errorPageElement = screen.getByText(/Sorry... The error occurred/i);
    expect(errorPageElement).toBeInTheDocument();

    spyConsoleError.mockRestore();
  });

  it('logs error information to the console', () => {
    const store = configureAppStore();
    const spyConsoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => null);

    const errorMessage = 'Praesent porttitor nulla';
    const ErrorComponent = () => {
      throw new Error(errorMessage);
    };

    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <ErrorBoundary>
            <ErrorComponent />
          </ErrorBoundary>
        </LangState>
      </Provider>
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
