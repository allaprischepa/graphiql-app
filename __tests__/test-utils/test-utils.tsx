import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { USER_EMAIL, USER_PASSWORD } from '../../src/constants';
import { AppRoutes, Languages } from '../../src/utils/enums';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import LangState from '../../src/languages/LangState';
import { routesConfig } from '../../src/router/router';
import { store } from '../../src/state/store';
import { Router } from '@remix-run/router';
import { vi } from 'vitest';

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

export const logInWithUserCredentials = async (
  email = USER_EMAIL,
  password = USER_PASSWORD
) => {
  const user = userEvent.setup();

  const emailInput = screen.getByRole('textbox', { name: /e\-mail:/i });
  const passwordInput = screen.getByLabelText(/password:/i);
  const submitButton = screen.getByRole('button', { name: /sign in/i });

  await user.type(emailInput, email);
  await user.type(passwordInput, password);

  await user.click(submitButton);
};

export const renderAppWithRoute = (route: AppRoutes) => {
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
  render(
    <Provider store={store}>
      <LangState initialState={{ language: Languages.EN }}>
        <RouterProvider router={router} />
      </LangState>
    </Provider>
  );
};

export const fixCodeMirrorTypeError = () => {
  Range.prototype.getClientRects = () => ({
    item: () => null,
    length: 0,
    [Symbol.iterator]: vi.fn(),
  });
};
