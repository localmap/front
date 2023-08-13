import "../../assets/styles/css/modal/column_delete.scss";
import React from "react";

type Props = {
  content: string;
  _cashe: string;
  onClose: () => void;
};
const Column_delete: React.FC<Props> = ({
  content,
  _cashe,
  onClose,
}: Props) => {
  return (
    <>
      {content === "컬럼삭제" && (
        <div className="modal_container">
          <div className="column_delete">
            <header className="column_delete_tit">
              <span>컬럼 삭제</span>
              <p>컬럼을 삭제하시겠습니까?</p>
            </header>
            <section className="column_delete_btn_wraps">
              <button className="c_delete_btn">삭제</button>
              <button onClick={onClose} className="c_cancle_btn">
                취소
              </button>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Column_delete;
