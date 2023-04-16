import './App.css';
import ReactDOM from "react-dom/client";
import './Config/assets/css/main.css';
import './Config/assets/css/noscript.css';
import initFontAwesome from "./utility/initFontAwesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
initFontAwesome();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
