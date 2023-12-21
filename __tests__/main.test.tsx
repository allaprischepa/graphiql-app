import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { configureAppStore } from '../src/state/store';
import { Provider } from 'react-redux';
import QueryEditor from '../src/components/QueryEditor/QueryEditor';
import { EditorView } from 'codemirror';
import { defaultQueryString } from '../src/state/request/requestSlice';
import ControlPanel, {
  PRETTIFY_BTN_TEST_ID,
} from '../src/components/ControlPanel/ControlPanel';
import { queries, renderAppWithRoute } from './test-utils/test-utils';
import userEvent from '@testing-library/user-event';
import { replaceEditorText } from '../src/utils/utils';
import { AppRoutes } from '../src/utils/enums';
import {
  REQUEST_SECTION_TEST_ID,
  RESPONSE_SECTION_TEST_ID,
} from '../src/pages/Main/Main';
import { IS_USER_LOGGED_IN } from '../src/constants';

describe('Main Page', () => {
  it('contains Request and Response Sections', async () => {
    localStorage.setItem(IS_USER_LOGGED_IN, 'true');

    vi.mock('firebase/auth', () => {
      return {
        getAuth: vi.fn().mockImplementationOnce(() => {}),
        onAuthStateChanged: vi.fn().mockImplementationOnce(() => {}),
      };
    });

    renderAppWithRoute(AppRoutes.main);

    const requestSection = screen.getByTestId(REQUEST_SECTION_TEST_ID);
    const responseSection = screen.getByTestId(RESPONSE_SECTION_TEST_ID);
    expect(requestSection).toBeInTheDocument();
    expect(responseSection).toBeInTheDocument();
  });
});

describe('Request Editor', () => {
  const store = configureAppStore();
  const viewRef = React.createRef<EditorView | null>();

  it('is editable', () => {
    render(
      <Provider store={store}>
        <QueryEditor mode="request" viewRef={viewRef} />
      </Provider>
    );

    const currentEditor = viewRef.current;
    expect(currentEditor).toBeInstanceOf(EditorView);

    if (currentEditor instanceof EditorView) {
      expect(currentEditor.state.facet(EditorView.editable)).toBeTruthy();
    }
  });

  it('contains introduction text', () => {
    render(
      <Provider store={store}>
        <QueryEditor
          mode="request"
          viewRef={viewRef}
          text={defaultQueryString}
        />
      </Provider>
    );

    const currentEditor = viewRef.current;
    expect(currentEditor).toBeInstanceOf(EditorView);

    if (currentEditor instanceof EditorView) {
      expect(currentEditor.state.doc.toString()).toEqual(defaultQueryString);
    }
  });
});

describe('Response Editor', () => {
  it('is readonly', () => {
    const store = configureAppStore();
    const viewRef = React.createRef<EditorView | null>();

    render(
      <Provider store={store}>
        <QueryEditor mode="response" viewRef={viewRef} />
      </Provider>
    );

    const currentEditor = viewRef.current;

    expect(currentEditor).toBeInstanceOf(EditorView);

    if (currentEditor instanceof EditorView) {
      expect(currentEditor.state.facet(EditorView.editable)).toBeFalsy();
    }
  });
});

describe('Prettify button', () => {
  it('prettifies query string', async () => {
    const store = configureAppStore();
    const requestViewRef = React.createRef<EditorView | null>();
    const responseViewRef = React.createRef<EditorView | null>();
    const variablesViewRef = React.createRef<EditorView | null>();
    const headersViewRef = React.createRef<EditorView | null>();

    render(
      <Provider store={store}>
        <QueryEditor mode="response" viewRef={requestViewRef} />
        <ControlPanel
          requestViewRef={requestViewRef}
          responseViewRef={responseViewRef}
          variablesViewRef={variablesViewRef}
          headersViewRef={headersViewRef}
        />
      </Provider>
    );

    const requestEditor = requestViewRef.current;
    const prettifyBtn = screen.getByTestId(PRETTIFY_BTN_TEST_ID);

    expect(prettifyBtn).toBeInTheDocument();
    expect(requestEditor).toBeInstanceOf(EditorView);

    if (requestEditor instanceof EditorView) {
      for (const query of queries) {
        const initial = query.initial;
        const prettified = query.prettified;

        replaceEditorText(requestViewRef, initial);
        expect(requestEditor.state.doc.toString()).toEqual(initial);

        await userEvent.click(prettifyBtn);

        expect(requestEditor.state.doc.toString()).toEqual(prettified);
      }
    }
  });
});
