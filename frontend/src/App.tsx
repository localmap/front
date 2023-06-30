// ./ 의 위치: frontend/src/
// ../의 위치: frontend/
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/user/login';
import Join from './pages/user/join';
import Pw_reset from './pages/user/pw_reset';
import Pwsearch from './pages/user/pwsearch';
import Pw_reset from './pages/user/pw_reset';
import Mypage from './pages/user/mypage';
import User_update from './pages/user/user_update';
import User_review from './pages/user/user_review';
import Notice from './pages/board/notice_list';
import EmailCheck from './pages/user/email_check';
import NickNameCheck from './pages/user/nickname_check';
import Location from './pages/user/location';
import Location_search from './pages/user/location_search';
import axios from 'axios';


axios.defaults.withCredentials = true;

const App: React.FC = () => {
  return (
    <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/join' element={<Join/>}/>
      <Route path = '/pwreset' element={<Pw_reset/>}/>
      <Route path='/pwsearch' element={<Pwsearch/>} />
      <Route path='/pwreset' element={<Pw_reset/>}/>
      <Route path='/mypage' element={<Mypage/>} />
      <Route path='/userupdate' element={<User_update/>}/>
      <Route path='/review' element={<User_review/>}/>
      <Route path='/notice' element={<Notice />} />
      <Route path='/emailcheck' element={<EmailCheck />} />
      <Route path='/nicknamecheck' element={<NickNameCheck/>} />
      <Route path='/location' element={<Location/>} />
      <Route path='/location_search' element={<Location_search/>} />
    </Routes>
  );
}


export default App;
