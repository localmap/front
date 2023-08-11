import "../../assets/styles/css/admin/notice_update.scss";

const Notice_update: React.FC = () => {
  return (
    <div className="notice_update">
      <header>
        <strong>공지사항</strong>
        <section className="notice_update_title">
          <div className="update_tit">
            <strong>제목</strong>
            <input type="text" placeholder="제목을 입력해주세요" />
          </div>
        </section>
      </header>
      <section className="update_body_text_area">
        <textarea placeholder="영문금지 한글만입력하시오"></textarea>
      </section>
      <section className="update_btn_wraps">
        <div className="update_btn">
          <button>수정</button>
        </div>
        <div className="update_cancle_btn">
          <button>취소</button>
        </div>
      </section>
    </div>
  );
};

export default Notice_update;
