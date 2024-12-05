import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Languages } from '../src/utils/enums';
import LangState from './../src/languages/LangState';
import { configureAppStore } from '../src/state/store';
import { Provider } from 'react-redux';
import DocSubtitle from '../src/components/DocSubtitle/DocSubtitle';

describe('Component DocSubtitle', () => {
  it('DocSubtitle displayed', async () => {
    const store = configureAppStore();
    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <DocSubtitle text="Test Types" icon="types.svg" />
        </LangState>
      </Provider>
    );

    const testTypes = await screen.findByText('Test Types');
    expect(testTypes).toBeInTheDocument();
  });
});
