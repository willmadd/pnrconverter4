import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import * as api from "../db/sqlqueries";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

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
                          <Helmet>
                    <title>{`The PNR Converter Blog | Easy PNR Converter`}</title>
            </Helmet>
        <Header />
        <Nav value={"en"} />
        <div className="blog-header">
          <h1>PNR Converter Blog</h1>
        </div>
        <h1>Welcome to the PNR Converter Blog</h1><h3>News and stories relating to the travel industry</h3>
        <ul className="blog">
          {this.state.articles.map(article => {
            return (
              <Link to={`/articles/${article.slug}`} key={`${article.slug}`}>
                <li className="blog-article shadow">
                <h2>{article.title}</h2>
                <img src={`/blogimages/blog/${article.image}`} alt={`${article.title}`}></img>
                <p>Created {new Date(article.created).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})}</p>
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
