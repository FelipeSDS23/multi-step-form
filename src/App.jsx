// styles
import './App.css';

// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import Thanks from './pages/Thanks';

function App() {
  return (
    <main className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/multi-step-form' element={<Step1 />} />
          <Route path='/step2/multi-step-form' element={<Step2 />} />
          <Route path='/step3/multi-step-form' element={<Step3 />} />
          <Route path='/step4/multi-step-form' element={<Step4 />} />
          <Route path='/thanks/multi-step-form' element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
