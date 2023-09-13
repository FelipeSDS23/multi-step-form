// styles
import './App.css'

// react
import { useState } from 'react';

// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components

// pages
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import Thanks from './pages/Thanks';

function App() {

  //INICIO STEP 1 DADOS
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  //FIM STEP 1 DADOS

  //INICIO STEP 2 DADOS
  const [plan, setPlan] = useState({name: "Arcade", price: 9});
  const [planPeriod, setPlanPeriod] = useState("Monthly");
  //FIM STEP 2 DADOS

  //INICIO STEP 3 DADOS
  const [onlineService, setOnlineService] = useState({active: false, value: 1});
  const [largeStorage, setLargeStorage] = useState({active: false, value: 2});
  const [customizableProfile, setCustomizableProfile] = useState({active: false, value: 2}); 
  console.log(onlineService, largeStorage, customizableProfile)
  //FIM STEP 3 DADOS

  const [totalValue, setTotalValue] = useState(0)
  console.log(totalValue)


  return (
    <main className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Step1 
            name={name} setName={setName}
            email={email} setEmail={setEmail}
            phone={phone} setPhone={setPhone}
          />} />
          <Route path='/step2' element={<Step2
            plan={plan} setPlan={setPlan}
            planPeriod={planPeriod} setPlanPeriod={setPlanPeriod}
            setOnlineService={setOnlineService}
            setLargeStorage={setLargeStorage}
            setCustomizableProfile={setCustomizableProfile}
          />} />
          <Route path='/step3' element={<Step3 
            onlineService={onlineService} setOnlineService={setOnlineService}
            largeStorage={largeStorage} setLargeStorage={setLargeStorage}
            customizableProfile={customizableProfile} setCustomizableProfile={setCustomizableProfile}
            plan={plan}
            setTotalValue={setTotalValue}
          />} />
          <Route path='/step4' element={<Step4
            plan={plan}
            planPeriod={planPeriod}
            onlineService={onlineService}
            largeStorage={largeStorage}
            customizableProfile={customizableProfile}
          />} />
          <Route path='/thanks' element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;
