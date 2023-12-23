import { useContext } from 'react';
import { langContext } from '../../languages/langContext';
import { getTeam } from '../../data/getTeam';
import './Footer.scss';

function Footer() {
  const {
    dispatch: { translate },
  } = useContext(langContext);

  const teamMembers = getTeam(translate).map((member) => (
    <a
      href={member.href}
      className="github-item"
      key={member.github.toString()}
    >
      <span className="nick">{member.name}</span>
    </a>
  ));

  return (
    <footer className="footer">
      <div className="container">
        <div className="body">
          <div className="github-body">{teamMembers}</div>
          <a href="https://rs.school/" className="footer-logo">
            <img src="/rs_school_js.svg" alt="RSS" />
          </a>
          <span className="date">2024</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
