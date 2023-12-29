import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Languages } from '../src/utils/enums';
import LangState from './../src/languages/LangState';
import { configureAppStore } from '../src/state/store';
import { Provider } from 'react-redux';
import App from '../src/components/App/App';

describe('App', () => {
  it('App displayed', async () => {
    const store = configureAppStore();
    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <App />
        </LangState>
      </Provider>
    );

    const reactiveBuQLya = await screen.findByText('reactiveBuQLya');
    expect(reactiveBuQLya).toBeInTheDocument();
  });
});
