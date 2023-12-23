import {
  ALLA_NAME,
  ALLA_TEXT,
  DOC_DESCR,
  DOC_TITLE,
  ERROR_PAGE_TEXT,
  ERROR_PAGE_TITLE,
  FEATURE_DOCUMENTATION,
  FEATURE_ENDPOINTS,
  FEATURE_HIGHLIGHTING,
  FEATURE_LANGUAGES,
  FEATURE_PRETTIFYING,
  FEATURE_RESPONSIVE,
  GO_HOME,
  HERO_AUTH,
  HERO_ENDPOINTS,
  HERO_RSS,
  HERO_SUBTITLE,
  LANG_LABEL,
  NOT_FOUND_TEXT,
  NOT_FOUND_TITLE,
  RELOAD_PAGE,
  SASHA_NAME,
  SASHA_TEXT,
  SIGN_IN,
  SIGN_OUT,
  TEAM_LEAD,
  TITLE_FEATURES,
  TITLE_TEAM,
  ZENA_NAME,
  ZENA_TEXT,
  MAIN_INTRO,
  EXECUTE_QUERY,
  PRETTIFY_QUERY,
  VARIABLES,
  HEADERS,
  QUERY_ERR_MSG_PREFIX,
  DEFAULT_QUERY_ERR_MSG,
  INVALID_VARIABLES_ERR_MSG,
  INVALID_HEADERS_ERR_MSG,
  HEADER_NAME,
  HEADER_VALUE,
  IS_INVALID,
  HEADER_VALIDATION_MSG,
  TYPE_STRING_VALIDATION_MSG,
  DOC_SUBTITLE_ROOT,
  DOC_SUBTITLE_FIELDS,
  DOC_SUBTITLE_ALL_SHEME,
  API_SETTINGS,
  ENDPOINT_SETUP_LABEL,
  ENDPOINT_SETUP_SAVE,
  ENDPOINT_SETUP_INTRO,
  ENDPOINT_VALIDATION_MSG,
  REQUIRED_MSG,
  REVERT_TEXT,
} from '../../constants';

const en = {
  [NOT_FOUND_TITLE]: 'Sorry... The page is not found',
  [NOT_FOUND_TEXT]: 'Please, go to Home page',
  [GO_HOME]: 'Go Home',
  [ERROR_PAGE_TITLE]: 'Sorry... The error occurred',
  [ERROR_PAGE_TEXT]: 'Please, try to reload page',
  [RELOAD_PAGE]: 'Reload Page',

  [LANG_LABEL]: 'EN',
  [SIGN_IN]: 'Sign In',
  [SIGN_OUT]: 'Sign Up',

  [HERO_SUBTITLE]: 'GraphiQL is a playground/IDE for graphQL requests.',
  [HERO_AUTH]:
    'App includes the authorization and authentication capabilities, ensuring access to the tool only for authorized users.',
  [HERO_ENDPOINTS]: 'It works with a user-specified GraphQL open endpoint.',
  [HERO_RSS]: 'The app is the result of completing the final task of',

  [FEATURE_HIGHLIGHTING]: 'Syntax highlighting for GraphQL requests',
  [FEATURE_PRETTIFYING]: 'Query editor with text prettifying',
  [FEATURE_DOCUMENTATION]: 'Lazy-loading documentation explorer',
  [FEATURE_LANGUAGES]: 'Available in two languages',
  [FEATURE_ENDPOINTS]: 'Work with any user-specified API endpoint',
  [FEATURE_RESPONSIVE]: 'Responsive design from mobile to desktop',

  [TITLE_FEATURES]: 'Features',
  [TITLE_TEAM]: 'Our team',

  [ALLA_NAME]: 'Alla Prischepa',
  [SASHA_NAME]: 'Alexander Filimonov',
  [ZENA_NAME]: 'Yauheniya Mastavaya',

  [ALLA_TEXT]:
    'She worked as a BE developer on Drupal for several years, had experience in PHP development and now decided to take an exciting learning journey with RSSchool to gain new skills in FE.',
  [SASHA_TEXT]:
    'He is well-trained and ready-to-work specialist with a solid technical education. Acquires new skills in front-end development by learning React.',
  [ZENA_TEXT]:
    'She has good commercial experience in website development using HTML, CSS and JavaScript. And now she is learning React to reach a new development level.',

  [TEAM_LEAD]: 'Team lead',

  [DOC_TITLE]: 'Docs',
  [DOC_SUBTITLE_ROOT]: 'Root Types',
  [DOC_SUBTITLE_FIELDS]: 'Fields',
  [DOC_SUBTITLE_ALL_SHEME]: 'All Schema Types',
  [DOC_DESCR]:
    'A GraphQL schema provides a root type for each kind of operation.',

  [MAIN_INTRO]: `  Welcome to GraphiQL!

  GraphiQL is an in-browser tool for writing, validating,
  and testing GraphQL queries.

  Start typing your queries into this side of the screen.
  Enjoy the convenience of intelligent syntax highlighting
  as you compose your GraphQL requests.

  GraphQL queries typically start with a "{" character.
  Lines that start with a # are ignored.

  An example GraphQL query might look like:

    {
      field(arg: "value") {
        subField
      }
    }

  Run Query:         press the play button
  Prettify query:    press the prettify button`,
  [EXECUTE_QUERY]: 'Execute query',
  [PRETTIFY_QUERY]: 'Prettify query',
  [VARIABLES]: 'Variables',
  [HEADERS]: 'Headers',
  [QUERY_ERR_MSG_PREFIX]: 'Query error',
  [DEFAULT_QUERY_ERR_MSG]:
    'Something went wrong. Please, try again later or choose another endpoint.',
  [INVALID_VARIABLES_ERR_MSG]: 'Variables are invalid JSON',
  [INVALID_HEADERS_ERR_MSG]: 'Headers are invalid JSON',
  [HEADER_NAME]: 'Header name',
  [HEADER_VALUE]: 'Header value',
  [IS_INVALID]: 'is invalid',
  [HEADER_VALIDATION_MSG]:
    'It can contain only alphanumeric characters and the following special characters',
  [TYPE_STRING_VALIDATION_MSG]: 'It should be a string only',
  [API_SETTINGS]: 'API Settings',
  [ENDPOINT_SETUP_LABEL]: 'Endpoint URL',
  [ENDPOINT_SETUP_SAVE]: 'Save',
  [ENDPOINT_SETUP_INTRO]:
    'Adjust the GraphQL endpoint URL according to your needs for making requests. You can revert to the initial endpoint by clicking the "Revert" button and saving your changes.',
  [ENDPOINT_VALIDATION_MSG]: 'Endpoint must be a valid URL',
  [REQUIRED_MSG]: 'This field is required',
  [REVERT_TEXT]: 'Set the initial endpoint',
};

export default en;
