/*
 * --------------------------------------------------------------------------- *
 * File: Login.js                                                              *
 * Project: usermanagement                                                     *
 * Created Date: 24 Oct 2022                                                   *
 * Author: Vikas K Solegaonkar (vikas.solegaonkar@gmail.com)                   *
 * Copyright (c) 2022 Vikas K Solegaonkar                                      *
 * https://solegaonkar.com                                                     *
 *                                                                             *
 * Last Modified: Mon Oct 24 2022                                              *
 * Modified By: Vikas K Solegaonkar                                            *
 *                                                                             *
 * HISTORY:                                                                    *
 * --------------------------------------------------------------------------- *
 * Date         By     Comments                                                *
 * --------------------------------------------------------------------------- *
 */

import React, { useState } from "react";
import axios from "axios";
import { Constants } from "./constants";
import Container from "react-bootstrap/Container";
import { Button, Form, Stack } from "react-bootstrap";
const sha1 = require("sha1");

function Login({ config }) {
  const { userNameIsEmail, apiKey, onSuccess, onFailure } = config;
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const attempt = async () => {
    console.log("Trying to Login");
    await axios
      .post(Constants.API_URL, {
        user,
        password: sha1(password),
        apiKey: sha1(apiKey),
        action: sha1("LOGIN"),
      })
      .then((response) => {
        if (response?.data?.success) {
          return onSuccess({ token: response.data.token, info: response.data.info });
        } else {
          return onFailure();
        }
      })
      .catch((e) => onFailure());
  };

  return (
    <Container>
      <Stack gap={4}>
        <Form.Control
          type="text"
          placeholder={userNameIsEmail ? "Email ID" : "User Name"}
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="login-form-input"
        />
        <Form.Control
          type="password"
          placeholder={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-form-input"
        />
        <Button onClick={attempt}>Login</Button>
      </Stack>
    </Container>
  );
}

export default Login;
