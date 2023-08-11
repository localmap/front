import "../../assets/styles/css/user/location.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Location_search from "./location_search";

const Location: React.FC = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  return (
    <div className="location">
      <header className="location_title">
        <h1>회원가입</h1>
      </header>
      <section className="search">
        <label>
          <input
            className="location_input"
            type="text"
            placeholder="동명(읍,면)으로 검색 (ex.서초동)"
          ></input>
        </label>
      </section>
      <section className="search_btn">
        <label>
          <button
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? "현재 위치로찾기" : "현재 위치로찾기"}
          </button>
          {visible && <Location_search />}
        </label>
      </section>
    </div>
  );
};

export default Location;
