import React, { Component } from "react";
import { ModalTitle } from "react-bootstrap";

export class NewsItem extends Component {
  
  render() {
    let { title, description, imageUrl, newsUrl,author, date,source } = this.props;
    return (
      <div className="container">
        <div className="card my-2 mx-2">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>
            {source}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://www.brinknews.com/wp-content/uploads/2023/01/Spacex-1.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ">
            <h5 className="card-title"> {title} </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
