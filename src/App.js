/*
 * --------------------------------------------------------------------------- *
 * File: App.js                                                                *
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

import Login from "./user/Login";
import Logout from "./user/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import ChangePassword from "./user/ChangePassword";
function App() {
  const config = {
    userNameIsEmail: true,
    apiKey: "apiKey",
    onSuccess: () => console.log("Success"),
    onFailure: () => console.log("Failure"),
    onLogout: () => console.log("Logout"),
    token: "TOKEN",
  };
  return (
    <>
      <Login config={config} />
      <Logout config={config} />
      <ChangePassword config={config} />
    </>
  );
}

export default App;
