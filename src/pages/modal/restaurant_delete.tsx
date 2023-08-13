import "../../assets/styles/css/modal/restaurant_delete.scss";

const Restaurant_delete: React.FC = () => {
  return (
    <div className="restaurant_delete">
      <header className="restaurant_delete_tit">
        <span>식당 삭제</span>
        <p>~ 식당을 삭제하시겠습니까?</p>
      </header>
      <section className="restaurant_delete_btn_wraps">
        <button className="res_delete_btn">삭제</button>
        <button className="res_cancle_btn">취소</button>
      </section>
    </div>
  );
};

export default Restaurant_delete;
