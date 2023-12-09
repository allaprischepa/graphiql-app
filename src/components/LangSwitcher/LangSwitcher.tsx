import './LangSwitcher.scss';

const LangSwitcher = () => {
  return (
    <div className="checkbox-wrapper">
      <input type="checkbox" id="inp" className="tgl tgl-flip" />
      <label
        htmlFor="inp"
        data-tg-on="EN"
        data-tg-off="RU"
        className="tgl-btn"
      ></label>
    </div>
  );
};

export default LangSwitcher;
