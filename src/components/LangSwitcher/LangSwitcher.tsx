import { useContext, useEffect, useState } from 'react';
import { LANG_LABEL } from '../../constants';
import { langContext } from '../../languages/langContext';
import './LangSwitcher.scss';
import { Languages } from '../../utils/enums';

const LangSwitcher = () => {
  const {
    state: { language },
    dispatch: { setLanguage, translate },
  } = useContext(langContext);

  const [isChecked, setIsChecked] = useState(
    language === Languages.EN ? true : false
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lang = e.target.checked ? Languages.EN : Languages.RU;
    setLanguage(lang);
  };

  useEffect(() => {
    language === Languages.EN ? setIsChecked(true) : setIsChecked(false);
  }, [language]);

  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        id="inp"
        className="tgl tgl-flip"
        checked={isChecked}
        onChange={changeHandler}
      />
      <label
        htmlFor="inp"
        className="tgl-btn"
        data-tg={translate(LANG_LABEL)}
      />
    </div>
  );
};

export default LangSwitcher;
