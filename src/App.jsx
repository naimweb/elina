import {Routes, Route} from 'react-router-dom'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Work from './pages/MyWork/Work'
import Service from './pages/Service/Service'
import Contact from './pages/Contact/Contact'
import Nav from './Navbar/Nav'

function App() {
  return (
      <>
        <Nav />
        <Routes>
             <Route path = "/about" element={<About />}/>
             <Route path = "/home"  element={<Home />}/>
             <Route path = "/work"  element={<Work />}/>
             <Route path = "/service"  element={<Service />}/>
             <Route path = "/contact"  element={<Contact />}/>

        </Routes>

      </>
  )
}

export default App