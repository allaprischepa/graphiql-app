import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Languages } from '../src/utils/enums';
import LangState from './../src/languages/LangState';
import { configureAppStore } from '../src/state/store';
import { Provider } from 'react-redux';
import LangSwitcher from '../src/components/LangSwitcher/LangSwitcher';
import getInitialState from '../src/languages/initialState';

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

    const langInput = screen.getByTestId('lang-input');
    expect(langInput.getAttribute('data-tg') === 'EN');

    fireEvent.click(langInput);
    expect(langInput.getAttribute('data-tg') === 'РУ');
  });

  it('Check that the component retrieves the value from the local storage upon mounting', async () => {
    expect(getInitialState()).toEqual({ language: Languages.RU });

    localStorage.setItem('language', Languages.EN);
    expect(getInitialState()).toEqual({ language: Languages.EN });

    localStorage.clear();
    expect(getInitialState()).toEqual({ language: Languages.RU });
  });
});
