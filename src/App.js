import "./App.css"
import Navbar from "./Components/Navbar";
import Divider from "./Components/Divider";
import LoginLinks from "./Components/LoginLinks";
function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginLinks />
      <Divider />
      {/* <LoginForm />
      <SignUpBttn /> */}
    </div>
  );
}

export default App;
