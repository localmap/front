import "../../assets/styles/css/modal/event_delete.scss";

const Event_delete: React.FC = () => {
  return (
    <div className="event_delete">
      <header className="event_delete_tit">
        <span>이벤트 삭제</span>
        <p>~ 이벤트를 삭제하시겠습니까?</p>
      </header>
      <section className="event_delete_btn_wraps">
        <button className="e_delete_btn">삭제</button>
        <button className="e_cancle_btn">취소</button>
      </section>
    </div>
  );
};

export default Event_delete;
