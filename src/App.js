import logo from './logo.svg';
import './sass/main.scss';
import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Popup from './components/Popup';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <About />
        <Features />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
      <Popup />
    </>
  );
}

export default App;
