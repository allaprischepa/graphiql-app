import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Languages } from '../src/utils/enums';
import LangState from './../src/languages/LangState';
import { configureAppStore } from '../src/state/store';
import { Provider } from 'react-redux';
import LangSwitcher from '../src/components/LangSwitcher/LangSwitcher';
// import { userEvent } from '@testing-library/user-event';

describe('Component LangSwitcher', () => {
  it('behavior on change', async () => {
    const store = configureAppStore();
    render(
      <Provider store={store}>
        <LangState initialState={{ language: Languages.EN }}>
          <LangSwitcher />
        </LangState>
      </Provider>
    );
    screen.debug();
    const langInput = screen.getByTestId('lang-input');
    //expect(langInput).toHaveAttribute('data-tg', 'EN');
    expect(langInput.getAttribute('data-tg') === 'EN');

    // await userEvent.click(langInput);
    // expect(langInput.getAttribute('data-tg') === 'РУ');
    // const en = await screen.findByText('EN');
    // expect(en).toBeInTheDocument();
  });
});
