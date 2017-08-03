
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import logoUrl from './skyline.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className={s.root}>
        <img src={logoUrl} className={s.logo}  />
        <div className={s.footMark}>
        </div>
      </footer>
    );
  }
}

export default withStyles(s)(Footer);
