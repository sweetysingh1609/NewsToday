import React, { Component } from "react";
import { ModalTitle } from "react-bootstrap";

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://www.reuters.com/resizer/ZhHs8eRERAgPmDbHzQuy0lcTpNM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2OQPDBRJVVJJXBTXQO3F76R6SE.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
