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
import Sidebar from "./components/pages/dashbord/SideBar";
import SettingPage from "./components/pages/dashbord/Settings";
import CalendarPage from "./components/pages/dashbord/Calendar";
import ProduitPage from "./components/pages/dashbord/Produit";
// import { Toaster } from 'sonner'

function App() {
  return (
    <BrowserRouter>
      {/*Navigation */}
      
      
      {/* Routes */}
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/Career" element={<CareerPage />} />
        </Route>
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
        <Route path="/dashboard" element={<Sidebar />} >
          <Route index element={<PageDashboard />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="produits" element={<ProduitPage />} />
          
        </Route> 
      </Routes>  

        {/* <Toaster  position="bottom-right" Rich Colors Success/> */}
    </BrowserRouter>
  );
}

export default App;
