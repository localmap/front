import "../../assets/styles/css/user/review_write.css";
import { useState } from "react";
import Choose_star from "../../components/choose_star";
const review_write: React.FC = () => {
  return (
    <div className="review_write">
      <div className="review_title">
        <strong>식당</strong>에 대한 솔직한 리뷰를 써주세요.
      </div>
      <Choose_star />
      <div className="review_write_textarea">
        <textarea></textarea>
      </div>
      <div className="text_limit">
        <p>0/500</p>
      </div>
      <div className="file_upload">
        <input type="file" accept="image/*" />
      </div>
      <div className="location_section">
        <p>위치인증</p>
        <button type="button" className="location_section_btn"></button>
      </div>
      <hr />
      <div className="button_wrap">
        <button className="close_btn">취소</button>
        <button className="upload_btn">작성</button>
      </div>
    </div>
  );
};

export default review_write;
