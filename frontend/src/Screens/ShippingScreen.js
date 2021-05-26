import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../Components/FormContainer";

const ShippingScreen = ({ history }) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [country, setCountry] = useState("");

  return <FormContainer>Shipping Screen</FormContainer>;
};

export default ShippingScreen;
