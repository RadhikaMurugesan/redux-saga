import React from 'react';
import { connect } from 'react-redux'
import './style.css';



let NewsItem = ({ article }) => (
  article ?
    <article className = "articleStyle"  >
      {article.error && <h2 className= "errorMessage" >{article.error}</h2>}
      {article.title && <div>
        <h1>{article.title}</h1>
        <img className = "imgStyle" src={article.urlToImage} alt="" />
        <h2>{article.description}</h2>
        <a href={article.url} target="_blank">READ MORE</a>
      </div>}
    </article> :
    null
);

const mapStateToProps = (state) => ({
  article: state.news,
})

export default  connect(
  mapStateToProps,
  null
)(NewsItem)

