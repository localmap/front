import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/css/userprofile.css';


const User_Admin:React.FC = () => {
    const navigate = useNavigate();
    
    const goUserUpdate = () => {
        navigate('/userupdate')
    };
    
    return(
        <div className="UserProfile_Container">
           <div className="user">
           <img className="Avatar" src={"http://placehold.it/50x50"} alt={'user_Profile'} />
           <p className="user_name">관리자 닉네임</p>
           </div>
          <div className="user">
            <p>유저수</p>
          <p className="number">0</p>
          </div> 
          <div className="user">
            <p>등록식당</p>
          <p className="number">0</p>
          </div>
          <div className="user">
            <p>등록대기식당</p>
          <p className="number">0</p>
          </div>
          <div className='user_update'>
            <button className='update' onClick={() => goUserUpdate()}>더보기&gt;</button>
          </div>
        </div>  
      );
    }

export default User_Admin;