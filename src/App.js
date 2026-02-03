import { Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";
import Home from "pages/Home/Home";
import Monthly from 'pages/Monthly/Monthly';
import MonthlyDetail from 'pages/MonthlyDetail/MonthlyDetail';
import ScrollToTop from "components/common/ScrollToTop";

function App() {
  return (
    <BrowserRouter basename="/mca">
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monthly" element={<Monthly />} />
        <Route path="/monthly/:id" element={<MonthlyDetail />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
