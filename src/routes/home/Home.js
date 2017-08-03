
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import history from '../../history';
import {fetchNews} from '../../actions/home/';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { Card, CardTitle, CardMedia, CardText, CardActions  } from 'react-toolbox';
import s from './Home.css';

class Home extends React.Component {

  render() {
    const cards = this.props.news.map((element, i) => (
      <Card key={i} theme={s}>
        <CardMedia theme={s}
          aspectRatio="wide"
          image={element.picture}
        />
        <CardTitle theme={s}
          title={element.headline}
          subtitle="Subtitle here"
        />
       <CardText theme={s}>{element.text}</CardText>
      </Card>
    ));

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className="header-title">
            Join Events & Groups
          </h1>
          <div className={s.cardContainer}>
            {cards}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    news: state.news.data,
    isFetching: state.news.isFetching
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNews: fetchNews }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(withStyles(s)(Home));
