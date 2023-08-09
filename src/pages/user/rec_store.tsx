import { useState } from "react";
import Location_search from "./location_search";
import Choose_food from "../../components/choose_food";
import "../../assets/styles/css/user/rec_store.css";

const Rec_store: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="rec_store">
      <header className="rec_store_title">
        <p>식당이름</p>
        <section className="rec_store_input">
          <input placeholder="상호를 입력해 주세요"></input>
        </section>
      </header>
      <div className="location_selects">
        <span>지역 및 위치 선택</span>
        <button
          className="location_button"
          onClick={() => setVisible(!visible)}
          type="button"
        ></button>
        {visible && (
          <div className="drop_down">
            <Location_search />
          </div>
        )}
      </div>
      <section className="food_type">
        <Choose_food />
      </section>
      <div className="registration">
        <div className="reg_ok_btn">
          <button>등록</button>
        </div>
        <div className="reg_cancle_btn">
          <button>취소</button>
        </div>
      </div>
    </div>
  );
};

export default Rec_store;
