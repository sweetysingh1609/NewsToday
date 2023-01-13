import React, { Component } from "react";
import { ModalTitle } from "react-bootstrap";

export class NewsItem extends Component {
  
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="container">
        <div className="card my-2 mx-2">
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
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}...</p>
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
