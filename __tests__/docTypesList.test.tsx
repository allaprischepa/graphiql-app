import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Languages } from '../src/utils/enums';
import LangState from './../src/languages/LangState';
import { configureAppStore } from '../src/state/store';
import { Provider } from 'react-redux';
import DocTypesList from '../src/components/DocTypesList/DocTypesList';

describe('Component DocTypesList', () => {
  it('DocTypesList displayed', async () => {
    const store = configureAppStore();
    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <DocTypesList
            types={[
              {
                name: 'test name 1',
                descr: 'test description 1',
                fields: [],
              },
              {
                name: 'test name 2',
                descr: 'test description 2',
                fields: [],
              },
            ]}
          />
        </LangState>
      </Provider>
    );

    const fields = screen.getAllByTestId('doc-type');
    expect(fields).toHaveLength(2);
  });
});
