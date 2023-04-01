import { useContext } from "react";
import "./App.css";
import { AppContext } from "./Components/AppContext";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  const { showModal, showLogin, showRegister } = useContext(AppContext);
  const [modal, setModal] = showModal;
  const [login, setLogin] = showLogin;
  const [register, setRegister] = showRegister;
  return (
    <div className="App">
      <Header />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
