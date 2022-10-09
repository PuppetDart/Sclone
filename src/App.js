import "./App.css"
import { Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/SignupPage/SignupPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import MainPage from "./Pages/MainPage/MainPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<MainPage />} />
        <Route path={process.env.PUBLIC_URL + "login"} element={<LoginPage />} />
        <Route path={process.env.PUBLIC_URL + "signup"} element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
