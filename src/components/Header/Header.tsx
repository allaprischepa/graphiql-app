import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { useEffect, useState } from 'react';
import { SCROLL_OFFSET } from '../../constants';
import './Header.scss';
import SignOut from '../SignOut/SignOut';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  const changeIsScroll = () => setIsScroll(window.scrollY > SCROLL_OFFSET);

  useEffect(() => {
    changeIsScroll();

    window.addEventListener('scroll', changeIsScroll);

    return (): void => {
      window.removeEventListener('scroll', changeIsScroll);
    };
  }, []);

  return (
    <header className={isScroll ? 'header scrolled' : 'header'}>
      <div className="container">
        <div className="header-body">
          <Logo />
          <div className="header-right">
            <LangSwitcher />
            <Navigation />
            <SignOut />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
