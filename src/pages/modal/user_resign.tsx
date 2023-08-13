import "../../assets/styles/css/modal/user_resign.scss";

const User_resign: React.FC = () => {
  return (
    <div className="user_resign">
      <header className="user_resign_tit">
        <span>회원탈퇴</span>
        <p>~ 님 탈퇴 하시겠습니까?</p>
      </header>
      <section className="resign_btn_wraps">
        <button className="u_resign_btn">탈퇴</button>
        <button className="u_cancle_btn">취소</button>
      </section>
    </div>
  );
};

export default User_resign;
