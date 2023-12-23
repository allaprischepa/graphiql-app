import './Navigation.scss';
import NavigationLink from '../NavigationLink/NavigationLink';
import { useContext } from 'react';
import { getNavigation, getNavigationPrivate } from '../../data/getNavigation';
import { langContext } from '../../languages/langContext';
import { useAppSelector } from '../../state/store';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../../utils/enums';

const Navigation = () => {
  const {
    dispatch: { translate },
  } = useContext(langContext);
  const isUserLoggedIn = useAppSelector('auth', 'isUserLoggedIn');
  const location = useLocation();

  const navigationList = getNavigation(translate).map((link) => (
    <NavigationLink key={link.text} text={link.text} to={link.to} />
  ));

  const navigationListPrivate =
    location.pathname === AppRoutes.welcome &&
    getNavigationPrivate(translate).map((link) => (
      <NavigationLink key={link.text} text={link.text} to={link.to} />
    ));

  return <ul>{isUserLoggedIn ? navigationListPrivate : navigationList}</ul>;
};

export default Navigation;
