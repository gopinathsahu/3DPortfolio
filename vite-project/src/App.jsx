import {BrowserRouter} from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
// import { About } from './components';
// import { Contact } from './components/Contact';
// import { Experience } from './components/Experience';
// import { Feedbacks } from './components/Feedbacks';
// import { Hero } from './components/Hero';

// import { Navbar } from './components/Navbar';
// import { Tech } from './components/Tech';
// import { Works } from './components/Works';
// import { StarsCanvas } from './components/canvas';
function App() {
 

  return (
   <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern  bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className='relative z-0 '>
        <Contact/>
        <StarsCanvas/>

      </div>
    </div>
   </BrowserRouter>
  )
}

export default App
