import logo from './logo.svg';
import './App.css';
import Navber from './components/Navber';
import Bot from './components/Bot';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Hireme from './components/Hireme';
import Projects from './components/Projects';
import Context from './components/Context';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-[#11164B] '>
      <Navber></Navber>
      <Bot></Bot>
      <Hero/>
      <About/>
      <Skills/>
      <Hireme/>
      <Projects/>
      <Context/>
      <Footer/>
    </div>
  );
}

export default App;
