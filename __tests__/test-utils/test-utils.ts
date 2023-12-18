import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { USER_EMAIL, USER_PASSWORD } from '../../src/constants';

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
