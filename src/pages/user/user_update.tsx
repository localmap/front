import User_resign from "../modal/user_resign";
import { useDispatch } from "react-redux";
import { set } from "../../reducers/modal/modalReducer";
import "../../assets/styles/css/user/user_update.scss";
const User_update: React.FC = () => {
  const dispatch = useDispatch();

  const open_user_resign_modal = () => {
    dispatch(set({ state: "유저탈퇴", cashe1: "캐시1", cashe2: "캐시2" }));
  };
  return (
    <div className="user_update">
      <p>회원정보 수정페이지</p>
      <button onClick={open_user_resign_modal}>탈퇴</button>
      <User_resign />
    </div>
  );
};

export default User_update;
