import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import * as api from "../db/sqlqueries";
import { Link } from "react-router-dom";

class Blog extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    let articles = api.getBlogArticles();
    articles.then(res => {
      this.setState({
        articles: res.data
      });
    });
  }

  render() {
    return (
      <div className="blog-container">
        <Header />
        <Nav value={"en"} />
        <div className="blog-header">
          <h1>PNR Converter Blog</h1>
        </div>
        <h1>Welcome to the PNR Converter Blog</h1><h3>News and stories relating to the travel industry</h3>
        <ul className="blog">
          {this.state.articles.map(article => {
            return (
              <Link to={`/articles/${article.slug}`}>
                <li className="blog-article shadow">
                <h2>{article.title}</h2>
                <img src={`/images/blog/${article.image}`} alt={`${article.title}`}></img>
                
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Blog;
