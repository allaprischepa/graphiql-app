import {
  ALLA_NAME,
  ALLA_TEXT,
  SASHA_NAME,
  SASHA_TEXT,
  ZENA_NAME,
  ZENA_TEXT,
} from '../constants';

export const getTeam = (translate: (key: string) => string) => [
  {
    id: 1,
    photo: 'alla.jpg',
    name: translate(ALLA_NAME),
    github: 'allaprischepa',
    href: 'https://github.com/allaprischepa',
    text: translate(ALLA_TEXT),
    isTeamlead: true,
  },

  {
    id: 2,
    photo: 'sasha.jpg',
    name: translate(SASHA_NAME),
    github: 'luftkrabbe',
    href: 'https://github.com/luftkrabbe',
    text: translate(SASHA_TEXT),
    isTeamlead: false,
  },

  {
    id: 3,
    photo: 'zena.jpg',
    name: translate(ZENA_NAME),
    github: 'zena86',
    href: 'https://github.com/zena86',
    text: translate(ZENA_TEXT),
    isTeamlead: false,
  },
];
