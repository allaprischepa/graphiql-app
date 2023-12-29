import {
  FEATURE_DOCUMENTATION,
  FEATURE_ENDPOINTS,
  FEATURE_HIGHLIGHTING,
  FEATURE_LANGUAGES,
  FEATURE_PRETTIFYING,
  FEATURE_RESPONSIVE,
} from '../constants';

export const getFeatures = (translate: (key: string) => string) => [
  {
    id: 1,
    icon: 'graphql.svg',
    text: translate(FEATURE_HIGHLIGHTING),
  },
  {
    id: 2,
    icon: 'clean.svg',
    text: translate(FEATURE_PRETTIFYING),
  },
  {
    id: 3,
    icon: 'docs.svg',
    text: translate(FEATURE_DOCUMENTATION),
  },
  { id: 4, icon: 'language.svg', text: translate(FEATURE_LANGUAGES) },
  {
    id: 5,
    icon: 'api.svg',
    text: translate(FEATURE_ENDPOINTS),
  },
  {
    id: 6,
    icon: 'responsive.svg',
    text: translate(FEATURE_RESPONSIVE),
  },
];
