import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import AnimatedRoutes from './components/navbar/AnimatedRoutes';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <AnimatedRoutes/>
    </BrowserRouter>
  )
}

export default App
