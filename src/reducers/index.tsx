import { combineReducers } from "redux";
import headerReducer from "./header/headerReducer";
import modalReducer from "./modal/modalReducer";
import userReducer from "./user/userReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  headerReducer,
  userReducer,
  modalReducer,
});

const persistConfig = {
  key: "root",
  // 'root'라는 값으로 localStorage에  whitelist값을 저장합니다.
  storage,
  //whitelist : 영속화하고자 하는 데이터를 설정해준다.
  whitelist: ["userReducer"],
  // blacklist -> 그것만 제외합니다
};

/* persistReducer(영속화설정값, 업데이트할 기본리듀서)*/
export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
