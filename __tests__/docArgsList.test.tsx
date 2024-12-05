import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Languages } from '../src/utils/enums';
import LangState from './../src/languages/LangState';
import { configureAppStore } from '../src/state/store';
import { Provider } from 'react-redux';
import DocArgsList from '../src/components/DocArgsList/DocArgsList';

describe('DocArgsList', () => {
  it('the component renders the specified number of args', async () => {
    const store = configureAppStore();
    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <DocArgsList
            args={[
              { name: 'testName1', type: 'String' },
              { name: 'testName2', type: 'String' },
            ]}
          />
        </LangState>
      </Provider>
    );

    const args = await screen.findAllByRole('listitem');
    expect(args).toHaveLength(2);
  });
});
