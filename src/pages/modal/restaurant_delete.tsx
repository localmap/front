import { set } from "../../reducers/modal/modalReducer";
import { useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Restaurant_delete: React.FC = () => {
  const modalstate = useSelector((state: RootState) => state.modalReducer);
  const dispatch = useDispatch();
  const closemodal = () => {
    dispatch(set({ ...modalstate, state: "" }));
  };

  if (modalstate.state === "") return null;
  return (
    <div className="m_res_del">
      <div className="restaurant_delete">
        <header className="restaurant_delete_tit">
          <span>식당 삭제</span>
          <p>~ 식당을 삭제하시겠습니까?</p>
        </header>
        <section className="restaurant_delete_btn_wraps">
          <button className="res_delete_btn">삭제</button>
          <button onClick={closemodal} className="res_cancle_btn">
            취소
          </button>
        </section>
      </div>
    </div>
  );
};

export default Restaurant_delete;
