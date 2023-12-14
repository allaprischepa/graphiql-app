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
