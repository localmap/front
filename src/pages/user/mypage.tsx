import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import User from "../../components/user";
import '../../assets/styles/css/user/mypage.css';
import '../../assets/styles/css/user/user_bookmark.css';
import { FaStar } from 'react-icons/fa';

const Mypage: React.FC = () => {
    const navigate = useNavigate();

    const activeStyle = {
        color: '#79c859ec',
        fontWeight: 500,
    };
    return (
        <div>
          <User/>
          <nav id='pagelist'>
            <ul>
                <li><NavLink className='link' style={({isActive}) => (isActive ? activeStyle: {})} to='/mypage_bookmark'>북마크</NavLink></li>
                <li><NavLink className='link' style={({isActive}) => (isActive ? activeStyle: {})} to='/mypage_review'>내가 쓴 리뷰</NavLink></li>
            </ul>
          </nav>
          <div id='name'>
          <p >북마크</p>
          </div>
          <div className='bookmark_table'>
           <div className="row">
             <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="card">
             <img src={"http://placehold.it/180x200"} className="card-img-top" alt="..." />
             <div className="card-body">
              <p className="card-title">음식점 이름
              <FaStar className='star'>별점 표시</FaStar></p>
              <p className="card-text">위치 -음식 종류</p>
            </div>
        </div>
      </div>
      </div>
        </div>
        </div>
    );
}
 
export default Mypage;