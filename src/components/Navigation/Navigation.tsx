import './Navigation.scss';
import NavigationLink from '../NavigationLink/NavigationLink';
import { useContext } from 'react';
import { getNavigation } from '../../data/getNavigation';
import { langContext } from '../../languages/langContext';

const Navigation = () => {
  const {
    dispatch: { translate },
  } = useContext(langContext);

  const navigationList = getNavigation(translate).map((link) => (
    <NavigationLink key={link.text} text={link.text} to={link.to} />
  ));

  return <ul>{navigationList}</ul>;
};

export default Navigation;
