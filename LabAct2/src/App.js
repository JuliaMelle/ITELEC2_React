import logo from "./logo.svg";
import "./App.css";
import "./styles/globals.css";
import Navbar from "./components/navbar";
import Search from "./components/search";
import Layout from "./components/layout_cards";
import NavbarDown from "./components/navbar_down";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />

      <h1 class="Title_position">Featured Entries</h1>

      <Layout />
      <h1 class="Title_position">Compiled Posts by Everyone</h1>

      <Layout />

      <NavbarDown />
      <div className="bottomspace"></div>
    </div>
  );
}

export default App;
