import { BaseUrl } from "../../util/axiosApi";
import axios from "axios";

//액션타입 생성
const SET_USER_TYPE = "user/SET";
const SET_USER_TOKEN = "user/SET";

//액션생성함수
export const set = (user: UserState) => ({
  type: SET_USER_TOKEN,
  payload: user,
});

type UserAction = ReturnType<typeof set>;

//상태(state) 타입정의
type UserState = {
  accessToken: string;
  refreshToken: string;
};

const initialState: UserState = {
  accessToken: "",
  refreshToken: "",
};

export const login = (email: string, pw: string) => {
  const url = BaseUrl + "/user/login/normal/";
  axios
    .post(url, {
      headers: {
        "Content-Type": "application/json",
      },
      body: { email: email, password: pw },
    })
    .then(function (response) {
      const { accessToken } = response.data.access_token;
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      initialState.accessToken = response.data.access_token;
      initialState.refreshToken = response.data.refresh_token;
    })
    .catch(function (error) {
      alert("로그인정보를 확인해 주세요");
    });
};

export default function userReducer(
  state: UserState = initialState,
  action: UserAction
) {
  switch (action.type) {
    case SET_USER_TOKEN:
      return (state = action.payload);
    default:
      return state;
  }
}
