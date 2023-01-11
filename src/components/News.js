import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("I am called news");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  async componentDidMount() {
    console.log("mount");
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=5bb2de342aca42e7b74da52e2abb9c3f&page=1";
    let data = fetch(url);
    let parseData = await (await data).json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }
  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5bb2de342aca42e7b74da52e2abb9c3f&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = fetch(url);
    let parseData = await (await data).json();
    console.log(parseData);

    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
    });
  };
  handleNextClick = async () => {
    this.setState();
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5bb2de342aca42e7b74da52e2abb9c3f&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = fetch(url);
      let parseData = await (await data).json();
      console.log(parseData);

      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
      });
    }
  };
  render() {
    console.log("render");

    return (
      <div className="container my-3">
        <h2>NewsToday - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
