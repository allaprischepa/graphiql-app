import { Languages } from '../utils/enums';

export const intro = {
  [Languages.EN]: `
  Welcome to GraphiQL

  GraphiQL is an in-browser tool for writing, validating, and
  testing GraphQL queries.

  Type queries into this side of the screen, and you will see intelligent
  typeaheads aware of the current GraphQL type schema and live syntax and
  validation errors highlighted within the text.

  GraphQL queries typically start with a "{" character. Lines that start
  with a # are ignored.

  An example GraphQL query might look like:

    {
       field(arg: "value") {
         subField
       }
     }

  Prettify query:  press the prettify button
  Run Query:  press the play button
  `,
};

export const titles = {
  runBtn: {
    [Languages.EN]: 'Execute query',
    [Languages.RU]: 'Выполнить запрос',
  },
  prettifyBtn: {
    [Languages.EN]: 'Prettify query',
    [Languages.RU]: 'Облагородить запрос',
  },
};
