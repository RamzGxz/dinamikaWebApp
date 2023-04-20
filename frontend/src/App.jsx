import AdminDashboard from './components/AdminDasboard'
import HomePage from './components/HomePage'
import StockPage from './components/StockPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element = {<HomePage/>}/>
          <Route path='/stock' element = {<StockPage/>}/>
          <Route path='/admin/dashboard' element = {<AdminDashboard/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
