import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline className="d-flex mt-2">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-1 ml-sm-4"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="pr-3">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
