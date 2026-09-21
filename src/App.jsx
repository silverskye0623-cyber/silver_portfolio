import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Conclusion
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <Projects />


        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[48px] rounded-br-[48px] sm:rounded-tl-[80px] sm:rounded-br-[80px] lg:rounded-tl-[150px] lg:rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[48px] rounded-br-[48px] sm:rounded-tl-[80px] sm:rounded-br-[80px] lg:rounded-tl-[150px] lg:rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <Conclusion />

        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
