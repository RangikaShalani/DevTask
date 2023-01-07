import "./App.css"
import { BrowserRouter as Router, Route,Routes} from "react-router-dom"
//pages
import Login from "./pages/Login"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <div>   
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={ <Home /> } />   
        </Routes>
      </div>
    </Router>
  )}

export default App
