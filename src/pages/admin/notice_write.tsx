import "../../assets/styles/css/admin/notice_write.css";

const Notice_write: React.FC = () => {
  return (
    <div className="notice_write">
      <header>
        <strong>공지사항</strong>
        <section className="notice_write_title">
          <div className="write_tit">
            <span>글쓰기</span>
          </div>
          <div className="tit">
            <strong>제목</strong>
            <input type="text" placeholder="제목을 입력해주세요" />
          </div>
        </section>
      </header>
      <section className="body_text_area">
        <textarea placeholder="영문금지 한글만입력하시오"></textarea>
      </section>
      <section className="write_btn">
        <div className="ok_btn">
          <button>등록</button>
        </div>
        <div className="no_btn">
          <button>취소</button>
        </div>
      </section>
    </div>
  );
};

export default Notice_write;
