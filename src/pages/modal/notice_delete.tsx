import "../../assets/styles/css/modal/notice_delete.scss";

const Notice_delete: React.FC = () => {
  return (
    <div className="notice_delete">
      <header className="notice_delete_tit">
        <span>공지사항 삭제</span>
        <p>~ 공지사항을 삭제하시겠습니까?</p>
      </header>
      <section className="notice_delete_btn_wraps">
        <button className="n_delete_btn">삭제</button>
        <button className="n_cancle_btn">취소</button>
      </section>
    </div>
  );
};

export default Notice_delete;
