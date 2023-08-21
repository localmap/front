import { NavLink, useNavigate } from "react-router-dom";
import User_Admin from "../../components/user_admin";
import "../../assets/styles/css/notice_manage.css";
import { set } from "../../reducers/modal/modalReducer";
import { useDispatch } from "react-redux";
import Notice_delete from "../modal/notice_delete";
const Notice_Manage: React.FC = () => {
  const activeStyle = {
    color: "#FFA101",
    fontWeight: 500,
  };

  const navigate = useNavigate();

  const goNoticeWrite = () => {
    navigate("/notice_write");
  };

  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(set({ state: "공지사항삭제", cashe1: "캐시1", cashe2: "캐시2" }));
  };
  return (
    <div>
      <User_Admin />
      <nav id="admin_pagelist">
        <ul>
          <li>
            <NavLink
              className="link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/mypage_reg_manage"
            >
              식당 등록 대기
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/mypage_editor_manage"
            >
              칼럼 관리
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/mypage_notice_manage"
            >
              공지사항 관리
            </NavLink>
          </li>
        </ul>
      </nav>
      <div id="name">
        <p>공지사항 관리</p>
        <button className="update" onClick={() => goNoticeWrite()}>
          글쓰기
        </button>
      </div>
      <div className="Notice_table">
        <table>
          <thead>
            <tr>
              <th>제목</th>
              <th>작성시간</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>공지사항1</td>
              <td>2023/07/05</td>
              <td className="delete_btn" onClick={openModal}>
                삭제
              </td>
              <Notice_delete />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notice_Manage;
