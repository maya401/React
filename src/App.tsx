//, Link, Route, Routes
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CareerPage from "./components/pages/career";
import BlogPage from "./components/pages/blogs";
import AboutPage from "./components/pages/about";
import HomePage from "./components/pages/home";
// import Header from "./components/header";
import DetailServices from "./components/pages/details";
import LoginPage from "./components/pages/authentification/login";
import SignUpPage from "./components/pages/authentification/inscription";
import PageDashboard from "./components/pages/dashbord/dashbord";
// import DetailServices from "./components/pages/details";

function App() {
  return (
    <BrowserRouter>
      {/*Navigation */}
      

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/Career" element={<CareerPage />} />
      </Routes>

      <Routes>
        <Route path="/Career/:service" element={<DetailServices />} />
      </Routes>

      <Routes>
        <Route path="/Career/:service" element={<DetailServices />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/inscription" element={<SignUpPage />} />
      </Routes>

      <Routes>
        <Route path="/dashboard" element={<PageDashboard />} />

      </Routes>  

    </BrowserRouter>
  );
}

export default App;
