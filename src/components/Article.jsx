import React, { Component } from 'react';
import Header from "./Header";
import Nav from "./Nav";
import * as api from "../db/sqlqueries";
import Markdown from 'markdown-to-jsx';

class Article extends Component {
state={
  title:"",
}

componentDidMount(){
  let {slug} = this.props.match.params
  let articles = api.getBlogArticle(slug);
  articles.then(res => {
    this.setState({
      title:res.data[0].title,
      image:res.data[0].image,
      entry:res.data[0].entry

    });
  });
}

render() {
  const {title, image, entry} = this.state;
  return (
    <div>
      <Header />
        <Nav value={"en"} />
      <div className="blurb shadow">
        <h1>{title}</h1>
        <img src={`/images/blog/${image}`} alt={`${title}`}></img>
        <Markdown>{String(entry)}</Markdown>
        </div>
      </div>
    );
  }
}

export default Article;