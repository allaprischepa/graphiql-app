import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Languages } from '../src/utils/enums';
import LangState from './../src/languages/LangState';
import DocArg from '../src/components/DocArg/DocArg';
import { configureAppStore } from '../src/state/store';
import { Provider } from 'react-redux';

describe('DocArg', () => {
  it('DocArg displayed', async () => {
    const store = configureAppStore();
    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <DocArg arg={{ name: 'testName', type: 'String' }} />
        </LangState>
      </Provider>
    );

    const string = await screen.findByText('String');
    expect(string).toBeInTheDocument();
  });
});
