import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './components/Footer';
import AnimatedRoutes from './AnimatedRoutes';
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <AnimatedRoutes />

        <Footer />
      </Router>
      
    </div>

  );
}

export default App;
