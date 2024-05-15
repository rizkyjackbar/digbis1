import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Product from './components/Product';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Product />
      <About />
      <Footer />
    </div>
  );
}

export default App;