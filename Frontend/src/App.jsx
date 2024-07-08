import { Outlet } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import { useEffect, useState } from "react";
import Footer from "./components/utils/Footer";
import Header from "./components/utils/Header";
import axios from 'axios'

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});

  // make an api request to backend login
  // useEffect(()=>{
  //   const fetchUser = async ()=>{
  //     try {
  //       const response = await axios.get('http://127.0.0.1:3000/login', {withCredentials: true});
  //       setUser(response.data.user);
  //       setIsAuthorized(true);
  //     } catch(err) {
  //       setIsAuthorized(false);
  //     }
  //   }

  //   fetchUser();
  // }, [isAuthorized]);

  return (
    <AppContext.Provider value={{ isAuthorized, setIsAuthorized, user, setUser }}>
      {/* <Header/> */}
      <Outlet/>
      {/* <Footer/> */}
    </AppContext.Provider>
  )
}

export default App;
