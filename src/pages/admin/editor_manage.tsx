import { NavLink, useNavigate } from "react-router-dom";
import User_Admin from "../../components/user_admin";
import '../../assets/styles/css/editor_manage.css';

const Editor_Manage: React.FC = () => {
    const activeStyle = {
        color: '#FFA101',
        fontWeight: 500,
    };

    const navigate = useNavigate();
    
    const goEditorWrite = () => {
        navigate('/editor_write')
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
          <p >칼럼 목록</p>
          <button className="update" onClick={() => goEditorWrite()}>글쓰기</button>
          </div>
          <div className='Editor_table'>
           <table>
           <thead>
             <tr>
              <th>제목</th>
              <th>작성시간</th>
            </tr>
           </thead>
          <tbody>
           <tr>
            <td>칼럼제목1</td>
            <td>2023/07/05</td>
          </tr>
        </tbody>
       </table>
        </div>
        </div>
    );
}

export default Editor_Manage;