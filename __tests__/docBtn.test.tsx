import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Languages } from '../src/utils/enums';
import LangState from './../src/languages/LangState';
import { configureAppStore } from '../src/state/store';
import { Provider } from 'react-redux';
import Main from '../src/pages/Main/Main';
import { userEvent } from '@testing-library/user-event';

describe('Component DocBtn', () => {
  it('behavior on click', async () => {
    const store = configureAppStore();
    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <Main />
        </LangState>
      </Provider>
    );

    expect(screen.queryByText(/'Docs'/i)).not.toBeInTheDocument();

    const docBtn = screen.getByTestId('doc-btn');
    await userEvent.click(docBtn);
    expect(await screen.findByText('Docs')).toBeInTheDocument();
  });
});
