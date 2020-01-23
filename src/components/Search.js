import React from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";

const Search = props => {
  return (
    <div>
      <InputGroup className="book-search">
        <Button
          className="clear-search-field"
          disabled={props.query.length > 0 ? false : true}
          onClick={props.resetHandler}
        >
          &times;
        </Button>

        <Input
          style={{ textAlign: "center" }}
          type="text"
          value={props.search}
          onChange={props.onChange}
          placeholder="Type author, book name subject..."
        />
        <InputGroupAddon addonType="append">
          <Button
            color="primary"
            disabled={props.query.length > 0 ? false : true}
            onClick={props.onSubmit}
          >
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Search;
