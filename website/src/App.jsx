import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ExperiencePage from './pages/ExperiencePage.jsx'
import './App.css'

function App() {
  return (
    <div className="app-root">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
