
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';
import { Card, CardTitle, CardText, Chip, Avatar  } from 'react-toolbox';
import s from './Groups.css';

class Groups extends React.Component {

  render() {

    const cards = !this.props.isFetching && this.props.groups.map((element, i) => (
      <Card key={i} theme={s}>
       <CardText theme={s}>
         <h3>{element.name}</h3>
          { element.users && element.users.map((user) => (
            <Chip id={user.id} className={s.chip}>
              <Avatar theme={s}><img src={user.picture}/></Avatar>
              <span>{user.name}</span>
            </Chip> ))
          }
       </CardText>
      </Card>
    ));

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Groups</h1>
          <div className={s.groupWrapper}>
            {cards}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    groups: state.groups.data,
    isFetching: state.groups.isFetching
  };
}

export default connect(mapStateToProps)(withStyles(s)(Groups));
