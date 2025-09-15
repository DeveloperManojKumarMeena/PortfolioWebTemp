
import Home from './components/Pages/Home.jsx'
import About from './components/Pages/About.jsx'
import Services from './components/Pages/Services.jsx'
import Contact from './components/Pages/Contact.jsx'
import Resume from './components/Pages/Resume.jsx'
import Project from './components/Pages/Project.jsx'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
     
         <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
        </Routes>
    </div>
    </div>
  )
}

export default App