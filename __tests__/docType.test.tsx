import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Languages } from '../src/utils/enums';
import LangState from './../src/languages/LangState';
import { configureAppStore } from '../src/state/store';
import { Provider } from 'react-redux';
import DocType from '../src/components/DocType/DocType';

describe('Component DocType', () => {
  it('DocType displayed', async () => {
    const store = configureAppStore();
    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <DocType type="test string" />
        </LangState>
      </Provider>
    );

    const testString = await screen.findByText('test string');
    expect(testString).toBeInTheDocument();
  });
});
