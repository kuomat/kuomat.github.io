import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ExperiencePage from './pages/ExperiencePage.jsx'
import SkillsPage from './pages/SkillsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import './App.css'

function App() {
  return (
    <div className="app-root">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
