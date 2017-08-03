
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link';
import birdUrl from './bird.jpg';
import s from './Menu.css';

class Menu extends React.Component {

  render() {
    return (
      <ul className={s.Menu}>
        <li className={s.firstElement}><img src={birdUrl} className={s.birdLogo} alt="Internation Bird" /></li>
        <li className={s.Element}><Link className={s.link} to="/" onClick={this.props.onMenuClick}>Home</Link></li>
        <li className={s.Element}><Link className={s.link} to="/users" onClick={this.props.onMenuClick}>Users</Link></li>
        <li className={s.Element}><Link className={s.link} to="/groups" onClick={this.props.onMenuClick}>Group</Link></li>
      </ul>
    );
  }
}

export default withStyles(s)(Menu);
