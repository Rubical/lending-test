import "./reset.css";
import cl from "./App.module.css";
import NavBar from "./components/UI/NavBar/NavBar";
import Header from "./components/UI/Header/Header";

function App() {
  return (
    <div className={cl.app}>
      <div className={cl.container}>
        <NavBar />
        <Header />
      </div>
    </div>
  );
}

export default App;
