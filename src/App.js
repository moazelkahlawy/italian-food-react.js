import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
