import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/NavBar/Navbar'

function App() {

  return (
    <>

    <div className="mainDiv">
       <Router>
        <Navbar/>
         <Routes>
          
         </Routes>
       </Router>
    </div>
     
    </>
  )
}

export default App
