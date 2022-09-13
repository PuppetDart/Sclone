import "./App.css"
import { Routes, Route } from "react-router-dom";
import SignupPage from "./SignupPage/SignupPage";
import LoginPage from "./LoginPage/LoginPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<p>Nothing here mate</p>} />
        <Route path={process.env.PUBLIC_URL + "login"} element={<LoginPage />} />
        <Route path={process.env.PUBLIC_URL + "signup"} element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
