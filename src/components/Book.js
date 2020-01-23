import React from "react";
import { Badge } from "reactstrap";

const Book = props => {
  const { volumeInfo } = props;

  return (
    <div className="book">
      <div className="book-img-wrapper">
        <img
          src={volumeInfo.imageLinks.thumbnail}
          alt={volumeInfo.title}
          className="book-img"
        />
      </div>
      <div className="book-body">
        <h2 className="book-title">
          {volumeInfo.title}:{" "}
          <small className="text-muted">{volumeInfo.subtitle}</small>
        </h2>
        <div className="book-field">
          <a href="#">{volumeInfo.authors.join(", ").trim()}</a> -{" "}
          {volumeInfo.publishedDate.split("-")[0]}
        </div>
        <p className="book-text">{volumeInfo.description}</p>

        <div className="categories">
          {volumeInfo.categories.map(category => (
            <Badge pill>{category}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;
