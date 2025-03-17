import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PayrollLayout from './Payroll/PayrollLayout';
import DashBoard from './Payroll/Pages/DashBoard/DashBoard';
import PayRun from './Payroll/Pages/PayRun/PayRun';
import Approval from './Payroll/Pages/Approval/Approval';
import Form16 from './Payroll/Pages/Form16/Form16';
import Settings from './Payroll/Pages/Settings/Settings';

function App() {
  return (
    <div className="App font-AnekLatin">
     <Routes>
      <Route path='/' element={<PayrollLayout/>}>
        <Route index element={<DashBoard/>}/>
        <Route path='dashboard' element={<DashBoard/>}/>
        <Route path='payrun' element={<PayRun/>}/>
        <Route path='approval' element={<Approval/>}/>
        <Route path='form16' element={<Form16/>}/>
        <Route path='settings' element={<Settings/>}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
