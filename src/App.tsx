import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Home } from "./components/pages/Home"
import { Company } from "./components/pages/Company"
import { Contact } from "./components/pages/Contact"
import { NewProject } from "./components/pages/NewProject"
import { Projects } from "./components/pages/Projects"

import { Navbar } from "./components/layout/Navbar/Navbar"
import { Footer } from "./components/layout/Footer/Footer"

import { Container } from "./components/layout/container/Container"

function App() {

  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/newprojects" element={<NewProject />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
