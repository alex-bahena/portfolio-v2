import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/side-bar/SideBar";

function App() {
  return (
    <div className="container">
      <SideBar></SideBar>
      <Header></Header>
    </div>
  );
}

export default App;
