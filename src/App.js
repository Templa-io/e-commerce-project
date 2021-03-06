import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero";
// import Products from "./components/Products";
import Product from "./components/product";
import ReactMainSlider from "./components/ReactMainSlider";
import Layout from "./components/Layout";
import Information from "./components/Information";
import Footer from "./components/Footer";
import MainFooter from "./components/MainFooter";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact to="/">
          <Home />
          <ReactMainSlider />
          <Hero />
          <Layout />
          <Information />
          <Footer />
          <MainFooter />
        </Route>
      </Router>
    </>
  );
}

export default App;
