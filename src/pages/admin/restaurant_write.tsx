import Choose_food from "../../components/choose_food";
import Choose_price from "../../components/choose_price";
import { set } from "../../reducers/modal/modalReducer";
import { useDispatch } from "react-redux";
import Map from "../modal/map";
const Restaurant_write: React.FC = () => {
  const dispatch = useDispatch();
  const open_map_modal = () => {
    dispatch(set({ state: "맵모달", cashe1: "캐시1", cashe2: "캐시2" }));
  };
  return (
    <main className="restaurant_write">
      <section className="restaurant_title">
        <p>식당이름</p>
        <input
          className="restaurant_name"
          placeholder="상호를 입력해 주세요"
        ></input>
      </section>
      <section className="location_select">
        <span>지역 및 위치 선택</span>
        <button onClick={open_map_modal} type="button"></button>
        <Map />
      </section>
      <section className="food_type">
        <Choose_food />
      </section>

      <section className="price_type">
        <Choose_price />
      </section>

      <section className="menu">
        <section className="menu_title">
          <span>메뉴</span>
          <button>+</button>
        </section>
        <section className="menu_list">
          <div className="menu_img"></div>
          <div className="menu_sub">
            <span>오렌지</span>
            <span>5000원</span>
          </div>
        </section>
      </section>

      <section className="hours_title">
        <p>영업시간</p>
        <input placeholder="영업 시간을 입력해 주세요"></input>
      </section>
      <section className="button_wrap">
        <button className="cancel_btn">취소</button>
        <button className="check_btn">확인</button>
      </section>
    </main>
  );
};

export default Restaurant_write;
