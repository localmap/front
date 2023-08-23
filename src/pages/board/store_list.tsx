import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Store_list: React.FC = () => {
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);

  const navigate = useNavigate();
  const goStore_info = () => {
    navigate("/store_info");
  };
  return (
    <div className="store_list">
      <div className="list_subject">
        <p>클릭수 / 2023-05-00(현재날짜)</p>
        <strong>oo맛집 목록</strong>
      </div>
      <main className="review_list">
        <div className="review">
          <div
            className="food_img"
            onClick={() => {
              goStore_info();
            }}
          >
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"></img>
          </div>
          <div className="list_info">
            <span>음식점</span>
            <strong>4.3</strong>
            <div className="star_wrap">
              <button
                className="star_btn1"
                onClick={() => setStar1(!star1)}
                style={{
                  backgroundImage: star1
                    ? `url('https://cdn-icons-png.flaticon.com/128/477/477406.png')`
                    : `url('https://cdn-icons-png.flaticon.com/128/1828/1828970.png')`,
                }}
              ></button>
            </div>
          </div>
          <p>경기도 시흥시 정왕동</p>
          <section className="more_btn">
            <button>더보기</button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Store_list;
