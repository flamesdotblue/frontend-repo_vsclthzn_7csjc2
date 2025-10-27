import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimeShowcase from './components/AnimeShowcase';
import Footer from './components/Footer';

function App() {
  const [filter, setFilter] = useState('');

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onSearch={setFilter} />
      <main>
        <Hero />
        <AnimeShowcase filter={filter} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
