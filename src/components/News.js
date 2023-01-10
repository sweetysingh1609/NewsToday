import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Chinese rush to renew passports as COVID border curbs lifted - Reuters",
      description:
        "People joined long queues outside immigration offices in Beijing on Monday, eager to renew their passports after China dropped COVID border controls that had largely prevented its 1.4 billion residents from travelling for three years.",
      url: "https://www.reuters.com/world/china/life-is-moving-forward-china-declares-new-covid-phase-2023-01-09/",
      urlToImage:
        "https://www.reuters.com/resizer/ZhHs8eRERAgPmDbHzQuy0lcTpNM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2OQPDBRJVVJJXBTXQO3F76R6SE.jpg",
      publishedAt: "2023-01-09T07:45:00Z",
      content:
        "BEIJING, Jan 9 (Reuters) - People joined long queues outside immigration offices in Beijing on Monday, eager to renew their passports after China dropped COVID border controls that had largely preven… [+4763 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Greg Wehner",
      title:
        "Senegal bus crash claims lives of 40, dozens others injured: reports - Fox News",
      description:
        "Two buses collided in Gniby, Senegal, killing 40 people and injuring dozens of others early Sunday morning, according to the country's president, Macky Sall.",
      url: "https://www.foxnews.com/us/senegal-bus-crash-claims-lives-dozens-injured-reports",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/01/Senegal-Buses-Crash.jpg",
      publishedAt: "2023-01-08T21:13:00Z",
      content:
        "At least 40 people were killed, and dozens of others were injured, in a bus crash on Sunday in central Senegal, according to reports.\r\nThe countrys president, Macky Sall, tweeted about the collision … [+1964 chars]",
    },
    {
      source: {
        id: null,
        name: "TPM",
      },
      author: "John Light",
      title:
        "Long COVID Stemmed From Mild Cases Of COVID-19 In Most People, According To A New Multicountry Study - TPM",
      description:
        "We found that a staggering 90% of people living with long COVID initially experienced only mild illness with COVID-19.",
      url: "https://talkingpointsmemo.com/cafe/long-covid-stemmed-from-mild-cases-of-covid-19-in-most-people-according-to-a-new-multicountry-study",
      urlToImage:
        "https://talkingpointsmemo.com/wp-content/uploads/2023/01/GettyImages-1361940125-1536x614.jpg",
      publishedAt: "2023-01-08T14:46:00Z",
      content:
        "This article is part of TPM Cafe, TPMs home for opinion and news analysis. It was originally published at The Conversation.\r\nEven mild COVID-19 cases can have major and long-lasting effects on people… [+4886 chars]",
    },
  ];
  constructor() {
    super();
    console.log("I am called news");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
