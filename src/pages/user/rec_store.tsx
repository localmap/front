import { useState } from "react";
import Location_search from "./location_search";
import Choose_food from "../../components/choose_food";
import "../../assets/styles/css/user/rec_store.css";

const Rec_store: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="rec_store">
      <div className="rec_store_title">식당이름</div>
      <input className="res_name" placeholder="상호를 입력해 주세요"></input>
      <div className="location_selects">
        <div className="inner_content">
          <div>지역 및 위치 선택</div>
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
        <hr />
      </div>
      <div className="store_food_type">음식종류</div>
      <Choose_food />
      <div className="registration">
        <button className="registration_btn">등록</button>
      </div>
    </div>
  );
};

export default Rec_store;
