import Restaurant_add from "../modal/restaurant_add";
import { set } from "../../reducers/modal/modalReducer";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Editor_write: React.FC = () => {
  const [modalopen, setModalopen] = useState(false);
  const dispatch = useDispatch();
  const openModal = () => {
    setModalopen(true);
    dispatch(set({ state: "식당검색결과", cashe1: "캐시1", cashe2: "캐시2" }));
  };

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
        <button onClick={openModal}>+</button>
        {modalopen && <Restaurant_add />}
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
