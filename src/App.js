import './App.css';
import About from './components/About';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Main />
    <Cards />
    <About />
    <Footer />
    </div>
  );
}

export default App;
