export const commentOutString = (str: string) => {
  return str
    .split('\n')
    .map((s) => `# ${s.trim()}`)
    .join('\n');
};
