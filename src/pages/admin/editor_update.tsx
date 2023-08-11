import "../../assets/styles/css/admin/editor_update.scss";

const Editor_update: React.FC = () => {
  return (
    <div className="editor_update">
      <article className="editor_update_title">
        <span>칼럼이름</span>
        <input type="text" placeholder="제목을 입력해 주세요"></input>
      </article>
      <article className="editor_update_title">
        <span>칼럼부제</span>
        <input type="text" placeholder="내용을 입력해 주세요"></input>
      </article>
      <section className="add">
        <span>식당추가</span>
        <button>+</button>
      </section>
      <section className="update_restaurant_name">
        <div className="res_name1">
          <span>식당이름1</span>
          <button>삭제</button>
        </div>
        <div className="res_name2">
          <span>식당이름2</span>
          <button>삭제</button>
        </div>
      </section>
      <hr />
      <section className="update_button_wrap">
        <button className="e_update_cancel_btn">취소</button>
        <button className="e_update_check_btn">확인</button>
      </section>
    </div>
  );
};

export default Editor_update;
