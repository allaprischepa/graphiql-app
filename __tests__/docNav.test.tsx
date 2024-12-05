import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Languages } from '../src/utils/enums';
import LangState from './../src/languages/LangState';
import { configureAppStore } from '../src/state/store';
import { Provider } from 'react-redux';
import DocNav from '../src/components/DocNav/DocNav';
import { updateHistory } from '../src/state/documentation/documentationSlice';
import { userEvent } from '@testing-library/user-event';

describe('Component DocNav', () => {
  it('DocNav displayed, behavior on click', async () => {
    const store = configureAppStore();
    store.dispatch(
      updateHistory([
        {
          name: 'Docs',
          descr:
            'A GraphQL schema provides a root type for each kind of operation.',
          fields: [
            {
              name: '',
              type: '',
              args: [],
              descr: '',
            },
          ],
        },
        {
          name: 'Test',
          descr: 'Test descr',
          fields: [
            {
              name: '',
              type: '',
              args: [],
              descr: '',
            },
          ],
        },
      ])
    );
    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <DocNav />
        </LangState>
      </Provider>
    );
    const docNav = screen.getByTestId('doc-nav');
    expect(docNav).toBeInTheDocument();
    await userEvent.click(docNav);
    expect(docNav).not.toBeInTheDocument();
  });
});
