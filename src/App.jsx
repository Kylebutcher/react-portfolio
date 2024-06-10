import { useState } from 'react'
import { NavLink } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route path = '/' element={<About />} />
          <Route path = '/portfolio' element={<Portfolio />} />
          <Route path = 'contact' element={<Contact />} />
          <Route path = '/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
