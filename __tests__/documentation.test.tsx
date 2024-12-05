import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Languages } from '../src/utils/enums';
import LangState from './../src/languages/LangState';
import { configureAppStore } from '../src/state/store';
import { Provider } from 'react-redux';
import Documentation from '../src/components/Documentation/Documentation';

describe('Component Documentation', () => {
  it('Documentation displayed', async () => {
    const store = configureAppStore();
    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <Documentation />
        </LangState>
      </Provider>
    );

    const docs = await screen.findByText('Docs');

    expect(docs).toBeInTheDocument();
  });
});
