import "../../assets/styles/css/admin/editor_write.css";

const Editor_write: React.FC = () => {
  return (
    <div className="editor_write">
      <article className="editor_write_title">
        <span>칼럼이름</span>
        <input type="text" placeholder="제목을 입력해 주세요"></input>
      </article>
      <article className="editor_write_title">
        <span>칼럼부제</span>
        <input type="text" placeholder="내용을 입력해 주세요"></input>
      </article>
      <section className="add">
        <span>식당추가</span>
        <button>+</button>
      </section>
      <section className="restaurant_name">
        <span>식당이름1</span>
        <span>식당이름2</span>
      </section>
      <hr />
      <section className="button_wrap">
        <button className="cancel_btn">취소</button>
        <button className="check_btn">확인</button>
      </section>
    </div>
  );
};

export default Editor_write;
