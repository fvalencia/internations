
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import logoUrl from './whitelogo.png';
import { AppBar, Input } from 'react-toolbox';
import appBarStyles from 'react-toolbox/lib/app_bar/theme.css';
import buttonStyles from 'react-toolbox/lib/button/theme.css';
import rippleStyles from 'react-toolbox/lib/ripple/theme.css';

class Header extends React.Component {
  render() {
    return (
      <AppBar leftIcon='menu' onLeftIconClick={this.props.toggle} theme={s}>
        <img src={logoUrl} width="250" height="55" alt="Internations" className={s.logo} />
        <Input type='tel' label='Search' name='search' icon='search' theme={s}  />
      </AppBar>
    );
  }
}

export default withStyles(appBarStyles, buttonStyles, rippleStyles, s)(Header);
