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

const setTabs = (str: string) => {
  let tabCount = 0;

  return str
    .split('\n')
    .map((subStr) => {
      if (subStr.includes('}') && tabCount > 0) tabCount--;
      const newSubStr = '\t'.repeat(tabCount) + subStr;
      if (subStr.includes('{')) tabCount++;

      return newSubStr;
    })
    .join('\n');
};

export const prettifyGraphQLString = (str: string) => {
  let newStr = sanitizeString(str.trim());
  newStr = newStr
    .replaceAll(/(\s+)/g, ' ')
    .replaceAll(/(\s*\(\s*)/g, '(')
    .replaceAll(/(\s*\)\s*)/g, ') ')
    .replaceAll(/(\s*{\s*)/g, ' {\n')
    .replaceAll(/(\s*})/g, '\n}')
    .replaceAll(/(\w+)\s+(?=\w)/g, '$1\n')
    .replaceAll(/(query)(\s+)/g, '$1 ')
    .replaceAll(/(query\s+{)/g, '{');
  newStr = setTabs(newStr);

  return newStr;
};
