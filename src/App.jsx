import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/* Header */}
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contactus' element={<Contact />}/>
        <Route path='/property/:id' element={<About /> } />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
