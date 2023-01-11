import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import MainPage from "./components/MainPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginHandler(userName, password) {
    console.log("loginHandler is running");
    console.log("username: ", userName);
    console.log("password: ", password);
    if (userName === "yunchir" && password === "asd") {
      setIsLoggedIn(true);
    } else {
      console.error("Wrong passwoed or username");
    }
  }

  return (
    <div className="">
      <div className="App">
        {isLoggedIn ? (
          <Profile logout={setIsLoggedIn} />
        ) : (
          <MainPage setLogin={loginHandler} />
        )}
      </div>
    </div>
  );
}

export default App;
