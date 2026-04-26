import { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Impact from './components/Impact/Impact';
import Method from './components/Method/Method';
import Lab from './components/Lab/Lab';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';

function App() {
  const chatbotRef = useRef(null);

  const handleVibeSend = (text) => {
    chatbotRef.current?.sendFromOutside(text);
  };

  return (
    <div className="App">
      <Navbar />
      <Hero onVibeSend={handleVibeSend} />
      <Impact />
      <Method />
      <Lab />
      <Footer />
      <Chatbot ref={chatbotRef} />
    </div>
  );
}

export default App;
