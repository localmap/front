import "../../assets/styles/css/user/restaurant_check.css";
const Restaurant_check: React.FC = () => {
  return (
    <div className="restaurant_check">
      <header className="res_check_tit">
        <span>등록확인</span>
      </header>
      <section className="res_caution">
        <div className="caution_tit">
          <p>등록 전 필독사항</p>
        </div>
        <div className="caution_list">
          <p>01. 이미 등록된 가게가 있다면, 중복 신청이 불가합니다.</p>
          <p className="import_caution">
            02. 허위로 등록 한 경우 불이익을 당할수도 있습니다.
          </p>
          <p>03. 검토하는 기간이 길어질수 있으니 양해부탁드립니다.</p>
        </div>
      </section>
      <section className="res_search">
        <div className="res_search_tit">
          <h1>맛집검색</h1>
          <span>
            고객님께서 신청하고자하는 가게의 <strong>등록여부를 확인 후</strong>{" "}
            등록 할 수 있습니다.
          </span>
        </div>
        <div className="res_search_name">
          <span>가게이름</span>
          <div className="search_name_input">
            <input type="text" placeholder="가게이름을 입력하세요." />
          </div>
        </div>
        <div className="res_search_location">
          <span>위치</span>
          <div className="search_location_input">
            <input type="text" placeholder="가게위치를 입력하세요." />
          </div>
        </div>
      </section>
      <section className="res_check_btn_wraps">
        <div className="res_check_btn">
          <button>조회</button>
        </div>
        <div className="res_ok_btn">
          <button>등록</button>
        </div>
      </section>
    </div>
  );
};

export default Restaurant_check;
