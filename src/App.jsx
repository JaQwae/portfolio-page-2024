import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import AnimatedRoutes from './components/navbar/AnimatedRoutes';
import Background from "./components/background/Background"

function App() {

  return (
    <BrowserRouter>
      <Background/>
      <Navbar/>
      <AnimatedRoutes/>
    </BrowserRouter>
  )
}

export default App
