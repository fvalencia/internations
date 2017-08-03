
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchNews} from '../../actions/home/';
import { Card, CardTitle, CardText, Chip  } from 'react-toolbox';
import s from './Users.css';

class Users extends React.Component {

  render() {

    const cards = !this.props.isFetching && this.props.users.map((element, i) => (
      <Card key={i} theme={s}>
        <CardTitle theme={s}
          avatar={element.picture}
          title={element.name}
          subtitle=""
        />
       <CardText theme={s}>
          { element.groups && element.groups.map((group) => ( <Chip id={group.id} theme={s}>{group.name}</Chip> )) }
       </CardText>
      </Card>
    ));

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Users</h1>
          {cards}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    users: state.users.data,
    isFetching: state.users.isFetching
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNews: fetchNews }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(withStyles(s)(Users));
