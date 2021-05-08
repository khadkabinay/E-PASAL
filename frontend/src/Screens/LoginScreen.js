import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";
import FormContainer from "../Components/FormContainer";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  return <div></div>;
};

export default LoginScreen;
