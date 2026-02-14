import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark overflow-hidden flex flex-col font-sans">
      <Header />
      <Hero />
      <Menu />
      <Footer />
    </div>
  )
}

export default App
