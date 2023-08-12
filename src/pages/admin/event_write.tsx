import "../../assets/styles/css/admin/event_write.scss";
import React from "react";

const Event_write: React.FC = () => {
  return (
    <div className="event_write">
      <header className="e_w_tit_wraps">
        <p>이벤트 작성</p>
        <div className="e_w_tit_input">
          <input type="text" placeholder="이벤트 제목을 작성해주세요" />
        </div>
      </header>
      <section className="e_w_main">
        <div className="e_w_textarea">
          <textarea></textarea>
        </div>
        <p>0/500</p>
      </section>
      <section className="e_w_file_upload">
        <div className="e_w_input">
          <input type="file" multiple={true} />
        </div>
        <p>0/1</p>
      </section>
      <section className="e_w_btn_wraps">
        <div className="e_w_cancle">
          <button>취소</button>
        </div>
        <div className="e_w_ok">
          <button>이벤트등록</button>
        </div>
      </section>
    </div>
  );
};

export default Event_write;
