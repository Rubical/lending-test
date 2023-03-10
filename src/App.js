import "./reset.css";
import cl from "./App.module.css";
import NavBar from "./components/UI/NavBar/NavBar";
import Header from "./components/UI/Header/Header";
import BackgroundImg from "./components/BackgroundImg/BackgroundImg";
import Footer from "./components/UI/Footer/Footer";

function App() {
  return (
    <div className={cl.app}>
      <BackgroundImg />
      <div className={cl.container}>
        <NavBar />
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
