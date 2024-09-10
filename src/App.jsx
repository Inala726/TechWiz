import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'

function App() {

  return (
    <>

    <div className="mainDiv">
       <Router>
        <Navbar/>
         <Routes>
            <Route path='/aboutUs' element={<About/>}/>
         </Routes>
         <Footer/>
       </Router>
    </div>
     
    </>
  )
}

export default App
