import './DocSubtitle.scss';

interface DocSubtitleProps {
  text: string;
  icon: string;
}

function DocSubtitle({ text, icon }: DocSubtitleProps) {
  return (
    <div className="doc-subtitle">
      <img src={icon} alt={text} />
      <h4>{text}</h4>
    </div>
  );
}

export default DocSubtitle;
