import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
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
