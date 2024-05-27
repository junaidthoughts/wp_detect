import React, { useState } from "react";
//router
import { BrowserRouter } from "react-router-dom";
import BaseRoutes from "./routes";
//router


const App = () => {
  const [user, setUser] = useState(localStorage.getItem("abrar-access") ? true : false);

  return (
    <>
      <BrowserRouter>
        <BaseRoutes setUser={setUser} user={user}/>
      </BrowserRouter>
    </>
  );
}

export default App;
