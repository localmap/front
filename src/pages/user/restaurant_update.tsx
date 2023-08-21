import "../../assets/styles/css/admin/restaurant_update.scss";
import { useState } from "react";
import Location_search from "../../components/location_search";
import Choose_food from "../../components/choose_food";
import { set } from "../../reducers/modal/modalReducer";
import { useDispatch } from "react-redux";
import Restaurant_delete from "../modal/restaurant_delete";

const Restaurant_update: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const openmodal = () => {
    dispatch(set({ state: "식당삭제", cashe1: "캐시1", cashe2: "캐시2" }));
  };
  return (
    <div className="restaurant_update">
      <button className="m_res_delete" onClick={openmodal}>
        삭제
      </button>
      <Restaurant_delete />
      <div className="restaurant_title_name">
        <p>식당이름</p>
        <input
          className="restaurant_name"
          placeholder="상호를 입력해 주세요"
        ></input>
      </div>
      <div className="location_choice">
        <div className="inner">
          <span>지역 및 위치 선택</span>
          <button
            className="location_btn"
            onClick={() => setVisible(!visible)}
            type="button"
          ></button>
          {visible && (
            <div className="drop_down">
              <Location_search />
            </div>
          )}
        </div>
      </div>
      <div className="picture_choose">
        <div className="thumbnail_p">
          <span>대표 사진 선택</span>
          <button>+</button>
        </div>
        <input
          className="picture_input"
          placeholder="식당을 대표할 사진을 골라주세요"
        ></input>
      </div>
      <div className="update_food_type">
        <Choose_food />
      </div>
      <div className="menu">
        <div className="menu_title">
          <span>메뉴</span>
          <button>+</button>
        </div>
        <div className="update_menu_list">
          <div className="menu_img"></div>
          <div className="menu_sub">
            <span>오렌지</span>
            <span>5000원</span>
          </div>
        </div>
      </div>
      <div className="opening_hours">
        <p>영업시간</p>
        <input placeholder="영업시간을 입력해 주세요"></input>
      </div>
      <div className="event">
        <div className="event_text_wraps">
          <span>이벤트</span>
          <button>+</button>
        </div>
        <div className="event_res_input">
          <input placeholder="식당을 대표할 사진을 골라주세요"></input>
        </div>
      </div>
      <div className="ceo">
        <div className="ceo_greetings">
          <span>사장님 인사말</span>
          <button>+</button>
        </div>
        <div className="ceo_input">
          <input placeholder="인사말을 입력해 주세요"></input>
        </div>
      </div>
      <div className="button_wrap">
        <button className="cancel_btn">취소</button>
        <button className="check_btn">수정</button>
      </div>
    </div>
  );
};

export default Restaurant_update;
