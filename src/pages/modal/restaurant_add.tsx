import "../../assets/styles/css/modal/restaurant_add.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { set } from "../../reducers/modal/modalReducer";
import { RootState } from "../../reducers";
import { useState } from "react";
const Restaurant_add: React.FC = () => {
  const modalState = useSelector((state: RootState) => state.modalReducer);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(set({ ...modalState, state: "" }));
  };

  if (modalState.state === "") return null;
  return (
    <div className="modal_container">
      <div className="restaurant_add">
        <span>{modalState.state}</span>
        <div className="res_search">
          <input type="text" placeholder="식당 검색" />
        </div>
        <section className="res_search_btn">
          <button onClick={closeModal}>확인</button>
        </section>
      </div>
    </div>
  );
};

export default Restaurant_add;
