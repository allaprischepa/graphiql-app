import { render } from '@testing-library/react';
import { AppRoutes, Languages } from '../../src/utils/enums';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import LangState from '../../src/languages/LangState';
import { routesConfig } from '../../src/router/router';
import { configureAppStore } from '../../src/state/store';
import { Router } from '@remix-run/router';

export const queries = [
  {
    initial: `
    query  {
      character  (id:   null)   {
        id  name
        status
        species

      }}
    `,
    prettified: `{
\tcharacter(id: null) {
\t\tid
\t\tname
\t\tstatus
\t\tspecies
\t}
}`,
  },
];

export const commentedStrings = [
  {
    initial: 'Vestibulum facilisis purus',
    commented: '#Vestibulum facilisis purus',
  },
  {
    initial: `
Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
Fusce a quam. Sed aliquam ultrices mauris.
Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Praesent ac massa at ligula laoreet iaculis.
`,
    commented: `#
#Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
#Fusce a quam. Sed aliquam ultrices mauris.
#Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Praesent ac massa at ligula laoreet iaculis.
#`,
  },
];

export const sanitizedStrings = [
  {
    initial: '#Vestibulum facilisis purus',
    sanitized: '',
  },
  {
    initial: 'Vestibulum facilisis purus',
    sanitized: 'Vestibulum facilisis purus',
  },
  {
    initial: `
# Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
# Fusce a quam. Sed aliquam ultrices mauris.
Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Praesent ac massa at ligula laoreet iaculis.
`,
    sanitized: `Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Praesent ac massa at ligula laoreet iaculis.`,
  },
];

export const renderAppWithRoute = (route: AppRoutes) => {
  const store = configureAppStore();
  const router = createMemoryRouter(routesConfig, {
    initialEntries: [route],
  });

  render(
    <Provider store={store}>
      <LangState initialState={{ language: Languages.EN }}>
        <RouterProvider router={router} />
      </LangState>
    </Provider>
  );

  return router;
};

export const renderApp = (router: Router) => {
  const store = configureAppStore();

  render(
    <Provider store={store}>
      <LangState initialState={{ language: Languages.EN }}>
        <RouterProvider router={router} />
      </LangState>
    </Provider>
  );
};
