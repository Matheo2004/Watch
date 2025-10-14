import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import ResponsiveAppBar from './components/Navbar'
import Accueil from './components/Accueil'
import Personnalisation from './components/Personnalisation'
import Catalogue from './components/Catalogue'

function App() {

  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/Personnalisation" element={<Personnalisation />} />
      </Routes>
    </Router>
  )
}

export default App
