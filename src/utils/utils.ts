export const commentOutString = (str: string) => {
  return str
    .split('\n')
    .map((s) => `#${s}`)
    .join('\n');
};

export const sanitizeString = (str: string) => {
  return str
    .split('\n')
    .filter((s) => s[0] !== '#')
    .filter((s) => s.trim().length > 0)
    .join('\n');
};
