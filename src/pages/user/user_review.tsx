import * as React from "react";
import User from "../../components/user";
import { NavLink, useNavigate } from "react-router-dom";
import "../../assets/styles/css/user/mypage.css";
import "../../assets/styles/css/user/user_review.css";
import { set } from "../../reducers/modal/modalReducer";
import Review_delete from "../modal/review_delete";
import { useDispatch } from "react-redux";

const User_review: React.FC = () => {
  const navigate = useNavigate();

  const activeStyle = {
    color: "#79c859ec",
    fontWeight: 500,
  };

  const dispatch = useDispatch();
  const openmodal = () => {
    dispatch(set({ state: "리뷰삭제", cashe1: "캐시1", cashe2: "캐시2" }));
  };

  return (
    <div>
      <User />
      <nav id="pagelist">
        <ul>
          <li>
            <NavLink
              className="link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/mypage_bookmark"
            >
              북마크
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/mypage_review"
            >
              내가 쓴 리뷰
            </NavLink>
          </li>
        </ul>
      </nav>
      <div id="name">
        <p>내가 쓴 리뷰</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>음식점 이름</th>
            <th>음식정보</th>
            <th>위치</th>
            <th>내용</th>
            <th>작성시간</th>
            <th>위치 인증</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>음식점 이름</td>
            <td>음식 정보(한식,중식,일식...)</td>
            <td>위치(서울 등)</td>
            <td>음식이 맛있었고...</td>
            <td>2023/07/05</td>
            <td>
              <button className="loca">state</button>
            </td>
            <td>
              <button onClick={openmodal} className="delete">
                Delete
              </button>
            </td>
            <Review_delete />
          </tr>
          <tr>
            <td>음식점 이름</td>
            <td>음식 정보(한식,중식,일식...)</td>
            <td>위치(서울 등)</td>
            <td>음식이 맛있었고...</td>
            <td>2023/07/05</td>
            <td>
              <button className="loca">state</button>
            </td>
            <td>
              <button onClick={openmodal} className="delete">
                Delete
              </button>
            </td>
            <Review_delete />
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default User_review;
