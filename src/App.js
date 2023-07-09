import { Carousel } from "bootstrap";
import "./App.css";
import Header from './header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardssection from './components/Cardssection'
import Hero from './components/hero'
import { Container } from "react-bootstrap";
import Gaminglibrary from "./components/Gaminglibrary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Profile from "./components/profile";
import Home from "./components/Home";

function App() {
  return (
    <>

      <Router>

        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/Profile" element={ <Profile /> } />


        </Routes>

      </Router>


    </>
  )
}

export default App;
