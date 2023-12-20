import { describe, it, expect } from 'vitest';
import langReducer from '../src/languages/langReducer';
import { LangActionType, Languages } from '../src/utils/enums';

describe('langReducer', () => {
  it('default case', async () => {
    const lang = langReducer(
      { language: Languages.EN },
      { type: LangActionType.UNKNOWN, payload: 'XX' }
    );

    expect(lang).toStrictEqual({ language: Languages.EN });
  });
});
