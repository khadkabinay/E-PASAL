import React, { useState } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../Components/CheckoutSteps";

const PlaceOrderScreen = () => {
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
    </>
  );
};

export default PlaceOrderScreen;
