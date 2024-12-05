import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Languages } from '../src/utils/enums';
import LangState from './../src/languages/LangState';
import { configureAppStore } from '../src/state/store';
import { Provider } from 'react-redux';
import DocType from '../src/components/DocType/DocType';
import { userEvent } from '@testing-library/user-event';
import { updateTypes } from '../src/state/documentation/documentationSlice';
import typesMock from './test-utils/typesMock';

describe('Component DocType', () => {
  it('DocType displayed', async () => {
    const store = configureAppStore();
    store.dispatch(updateTypes(typesMock));
    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <DocType type="test string" />
        </LangState>
      </Provider>
    );

    const testString = await screen.findByText('test string');
    expect(testString).toBeInTheDocument();

    const testStringBtn = await screen.findByRole('button');

    const getTypeFromHistory = () => {
      return store
        .getState()
        .documentation.history.find((type) => type.name === 'test string');
    };

    expect(getTypeFromHistory()).toBeUndefined();

    await userEvent.click(testStringBtn);

    expect(getTypeFromHistory()).toStrictEqual({
      name: 'test string',
      descr: 'Test descr',
      fields: [{ name: '', type: '', args: [], descr: '' }],
    });
  });
});
