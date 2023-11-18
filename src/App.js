import Job from './Components/Job';
import JobDescription from './Components/JobDescription';
import UserData from './Components/UserData';
import UserInfo from './Components/UserInfo';
import './Design/Style.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';
import Interview from './Components/Interview';
import Home from './Components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><UserInfo/> <Home/></>}/>
          <Route path='acceptJob' element={<> {<UserInfo />} {<Job />} {<JobDescription />} <Footer/></>}/>
          <Route path='acceptJob/userdata' element={<><UserInfo/> <UserData/> <Footer/></>}/>
          <Route path='interview' element={<><UserInfo/> <Interview/> <Footer/></>}/>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
