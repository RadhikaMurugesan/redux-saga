import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../actions/Actions';
import './style.css';

const Button = (props) =>{

  
    return (
      <button className = "btn"         
        onClick={props.getNews}
      >Press to see News</button>
    );
 

};

const mapDispatchToProps = {
  getNews: getNews,
};

export default  connect(
  null,
  mapDispatchToProps,
)(Button);
