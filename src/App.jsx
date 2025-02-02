import About from './components/About';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Service from './components/Service';
import SubHeader from './components/SubHeader';

function App() {
  return (
    <div>
      <Navbar />
      <SubHeader/>
      <About/>
      <Service/>
      <ContactUs/>
    </div>
  );
}

export default App;
