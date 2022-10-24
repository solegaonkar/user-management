/*
 * --------------------------------------------------------------------------- *
 * File: ChangePassword.js                                                     *
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
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
const sha1 = require("sha1");

function ChangePassword({ config }) {
  const { apiKey, onSuccess, token } = config;
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changePassword = async () => {
    await axios
      .post(Constants.API_URL, {
        password: sha1(newPassword),
        apiKey: sha1(apiKey),
        action: sha1("CHANGE_PASSWORD"),
        token,
      })
      .then((response) => {
        if (response?.data?.success) {
          return onSuccess();
        }
      })
      .catch((e) => {});
  };

  return (
    <Container>
      <Stack gap={3}>
        <Form.Control
          type="password"
          placeholder={"New Password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="login-form-input"
        />
        <Form.Control
          type="password"
          placeholder={"Confirm Password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="login-form-input"
        />
        <Button onClick={changePassword}>Change Password</Button>
      </Stack>
    </Container>
  );
}

export default ChangePassword;
