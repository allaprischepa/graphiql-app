import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Languages } from '../src/utils/enums';
import LangState from './../src/languages/LangState';
import { configureAppStore } from '../src/state/store';
import { Provider } from 'react-redux';
import DocField from '../src/components/DocField/DocField';

describe('DocField', () => {
  it('DocField displayed with args', async () => {
    const store = configureAppStore();
    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <DocField
            field={{
              name: 'testName',
              type: 'String',
              args: [
                { name: 'testArg1', type: 'String' },
                { name: 'testArg2', type: 'String' },
              ],
              descr: 'testDescr',
            }}
          />
        </LangState>
      </Provider>
    );

    const testName = await screen.findByText('testName');
    const args = await screen.findAllByRole('listitem');
    expect(args).toHaveLength(2);
    expect(testName).toBeInTheDocument();
  });
});
