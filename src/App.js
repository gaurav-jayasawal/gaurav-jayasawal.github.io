import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Impact from './components/Impact/Impact';
import Method from './components/Method/Method';
import Lab from './components/Lab/Lab';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Impact />
      <Method />
      <Lab />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
