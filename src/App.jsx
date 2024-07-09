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
      <div className='my-20 md:my-0'>
        <Second />
      </div>
      <div className='my-10 md:my-0'>
        <Third />
      </div>
      <div className='my-10 md:my-0'>
        <Fourth />
      </div>
      <div className='my-10 md:my-0'>
        <Fifth />
      </div>
      <div className='mt-20'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
