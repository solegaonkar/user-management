/*
 * --------------------------------------------------------------------------- *
 * File: Logout.js                                                             *
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

import React from "react";
import axios from "axios";
import { Constants } from "./constants";
import { Button } from "react-bootstrap";
const sha1 = require("sha1");

function Logout({ config }) {
  var { onLogout, token } = config;

  const logout = async () => {
    console.log("Trying to logout");
    await axios.post(Constants.API_URL, { action: sha1("LOGOUT"), token }).finally(() => onLogout());
  };

  return <Button onClick={logout}>Logout</Button>;
}

export default Logout;
