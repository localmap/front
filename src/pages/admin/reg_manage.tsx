import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import User_Admin from "../../components/user_admin";
import '../../assets/styles/css/reg_manage.css';

const reg_Manage: React.FC = () => {
    const activeStyle = {
        color: '#FFA101',
        fontWeight: 500,
    };
    return (
        <div>
        <User_Admin/>
          <nav id='admin_pagelist'>
            <ul>
                <li><NavLink className='link' style={({isActive}) => (isActive ? activeStyle: {})} to='/mypage_reg_manage'>식당 등록 대기</NavLink></li>
                <li><NavLink className='link' style={({isActive}) => (isActive ? activeStyle: {})} to='/mypage_editor_manage'>칼럼 관리</NavLink></li>
                <li><NavLink className='link' style={({isActive}) => (isActive ? activeStyle: {})} to='/mypage_notice_manage'>공지사항 관리</NavLink></li>
            </ul>
          </nav>
          <div id='name'>
          <p >식당 등록 대기</p>
          </div>
          <div className='Store_table'>
          <table>
           <thead>
             <tr>
              <th>유저 아이디</th>
              <th>음식점 이름</th>
              <th>위치</th>
              <th>음식종류</th>
              <th>작성시간</th>
            </tr>
           </thead>
          <tbody>
           <tr>
            <td>test1(유저 아이디)</td>
            <td>음식점 이름</td>
            <td>위치(서울 등)</td>
            <td>음식 정보(한식,중식,일식...)</td>
            <td>2023/07/05</td>
          </tr>
        </tbody>
       </table>
        </div>
        </div>
    );
}

export default reg_Manage;