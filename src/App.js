import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CardScreen from "./containers/CardScreen";
import CartScreen from "./containers/CartScreen";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <main className="ui container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/card/:id" element={<CardScreen />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/notfound" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
