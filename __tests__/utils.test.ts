import React, { MutableRefObject } from 'react';
import { describe, it, expect } from 'vitest';
import {
  commentedStrings,
  queries,
  sanitizedStrings,
} from './test-utils/test-utils';
import {
  commentOutString,
  prettifyGraphQLString,
  replaceEditorText,
  sanitizeString,
} from '../src/utils/utils';
import { EditorView } from 'codemirror';

describe('Function commentOutString()', () => {
  it('adds comment mark (#) for all string lines', () => {
    commentedStrings.forEach((obj) => {
      expect(commentOutString(obj.initial)).toEqual(obj.commented);
    });
  });
});

describe('Function sanitizeString()', () => {
  it('removes commented and empty string lines', () => {
    sanitizedStrings.forEach((obj) => {
      expect(sanitizeString(obj.initial)).toEqual(obj.sanitized);
    });
  });
});

describe('Function prettifyGraphQLString()', () => {
  it('prettifies GraphQL Query string', () => {
    queries.forEach((obj) => {
      expect(prettifyGraphQLString(obj.initial)).toEqual(obj.prettified);
    });
  });
});

describe('Function replaceEditorText()', () => {
  it('sets the passed text into the Editor', () => {
    const text = `In ut quam vitae odio lacinia tincidunt.
    Sed cursus turpis vitae tortor.
    Cras non dolor.
    Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus.`;

    const editorViewRef: MutableRefObject<EditorView | null> =
      React.createRef();
    editorViewRef.current = new EditorView();

    replaceEditorText(editorViewRef, text);

    expect(editorViewRef.current.state.doc.toString()).toEqual(text);
  });
});
