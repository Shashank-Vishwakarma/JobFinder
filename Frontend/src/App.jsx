import { Outlet } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import { useState } from "react";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});

  return (
    <AppContext.Provider value={{ isAuthorized, setIsAuthorized, user, setUser }}>
      <Outlet/>
    </AppContext.Provider>
  )
}

export default App;
