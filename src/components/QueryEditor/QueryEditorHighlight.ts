import { EditorView } from 'codemirror';
import { tags, Tag } from '@lezer/highlight';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import {
  Decoration,
  DecorationSet,
  MatchDecorator,
  ViewPlugin,
  ViewUpdate,
} from '@codemirror/view';

const highlightConfig = (Object.keys(tags) as (keyof typeof tags)[]).map(
  (tag) => ({
    tag: tags[tag as keyof typeof tags] as Tag,
    class: `cm-${tag}`,
  })
);

const highlightStyle = HighlightStyle.define(highlightConfig);
export const editorSyntaxHighlight = syntaxHighlighting(highlightStyle);

const matcher = new MatchDecorator({
  regexp: /"(data|errors)"/g,
  decoration: () => Decoration.mark({ class: 'specific-word' }),
});

export const specificWordsHighlight = ViewPlugin.fromClass(
  class {
    decorations: DecorationSet;

    constructor(view: EditorView) {
      this.decorations = matcher.createDeco(view);
    }

    update(update: ViewUpdate) {
      this.decorations = matcher.updateDeco(update, this.decorations);
    }
  },
  {
    decorations: (instance) => instance.decorations,
    provide: (plugin) =>
      EditorView.atomicRanges.of(
        (view) => view.plugin(plugin)?.decorations || Decoration.none
      ),
  }
);
