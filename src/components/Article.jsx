import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import * as api from "../db/sqlqueries";
import Markdown from "markdown-to-jsx";
import { Helmet } from "react-helmet";
import AdSense from "react-adsense";

class Article extends Component {
  state = {
    title: ""
  };

  componentDidMount() {
    let { slug } = this.props.match.params;
    let articles = api.getBlogArticle(slug);
    articles.then(res => {
      this.setState({
        title: res.data[0].title,
        image: res.data[0].image,
        entry: res.data[0].entry,
        created: res.data[0].created
      });
    });
  }

  render() {
    const { title, image, entry, created } = this.state;
    return (
      <div>
        <Helmet>
          <title>{`${title} | Easy PNR Converter`}</title>
        </Helmet>
        <Header />
        <Nav value={"en"} />
        <div className="blurb shadow">
          <img
            className="blogtitleimage"
            src={`/blogimages/blog/${image}`}
            alt={`${title}`}
          />
          <h1>{title}</h1>
          <p>
            Created{" "}
            {new Date(created).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric"
            })}
          </p>
          <div className="article-cont">
          <Markdown>{String(entry)}</Markdown>
          <div className="blog-ad">
            <AdSense.Google
              client="ca-pub-2303157713889417"
              slot="2425575290"
              style={{
                display: "inline-block"
              }}
              format=""
              responsive='true'
            />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
