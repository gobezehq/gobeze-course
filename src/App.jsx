import Fifth from './components/Fifth';
import Footer from './components/Footer';
import Fourth from './components/Fourth';
import Hero from './components/Hero';
import Second from './components/Second';
import Third from './components/Third';
function App() {
  return (
    <div className=''>
      <Hero />
      <Second />
      <div className=''>
        <Third />
      </div>
      <Fourth />
      <Fifth />
      <div className='mt-20'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
