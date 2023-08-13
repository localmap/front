import "../../assets/styles/css/modal/review_delete.scss";

const Review_delete: React.FC = () => {
  return (
    <div className="review_delete">
      <header className="review_delete_tit">
        <span>리뷰 삭제</span>
        <p>리뷰를 삭제하시겠습니까?</p>
      </header>
      <section className="review_delete_btn_wraps">
        <button className="r_delete_btn">삭제</button>
        <button className="r_cancle_btn">취소</button>
      </section>
    </div>
  );
};

export default Review_delete;
