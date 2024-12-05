import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Languages } from '../src/utils/enums';
import LangState from './../src/languages/LangState';
import { configureAppStore } from '../src/state/store';
import { Provider } from 'react-redux';
import DocFieldsList from '../src/components/DocFieldsList/DocFieldsList';

describe('DocFieldsList', () => {
  it('the component renders the specified number of args', async () => {
    const store = configureAppStore();
    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <DocFieldsList
            fields={[
              {
                name: 'testName1',
                type: 'String',
                args: [
                  { name: 'testArg1', type: 'String' },
                  { name: 'testArg2', type: 'String' },
                ],
                descr: 'testDescr1',
              },
              {
                name: 'testName2',
                type: 'String',
                args: [
                  { name: 'testArg3', type: 'String' },
                  { name: 'testArg4', type: 'String' },
                ],
                descr: 'testDescr2',
              },
            ]}
          />
        </LangState>
      </Provider>
    );

    const fields = screen.getAllByTestId('doc-field');
    expect(fields).toHaveLength(2);
  });
});
