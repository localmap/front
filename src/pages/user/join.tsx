import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../assets/styles/css/user/join.scss";
import * as axiosApi from "../../util/axiosApi";

const Join: React.FC = () => {
  //navigate
  const navigate = useNavigate();

  const goNicknameCheck = () => {
    navigate("/nicknamecheck");
  };

  const goLogin = () => {
    navigate("/login");
  };

  const goJoin = () => {
    navigate("/join");
  };

  const goLocation = () => {
    navigate("/location");
  };

  //user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordconfirm] = useState("");
  const [nickname, setNickname] = useState("");

  //통신
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosApi.join(email, password, nickname, goLogin, goJoin);
  };

  //유효성 검사

  //에러메세지
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordconfirmError, setPasswordConfirmError] = useState("");

  //유효성 검사 함수
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    const inputEmail = event.target.value;
    if (!inputEmail) {
      setEmailError("");
    } else if (!regex.test(inputEmail)) {
      setEmailError("이메일 형식이 올바르지 않습니다.");
    } else {
      setEmailError(" ");
    }
    setEmail(inputEmail);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = event.target.value;
    const passwordregx = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

    if (!inputPassword) {
      setPasswordError("");
    } else if (!passwordregx.test(inputPassword)) {
      setPasswordError("숫자+영문자 조합 8자리이상 입력하세요.");
    } else {
      setPasswordError(" ");
    }
    setPassword(inputPassword);
  };

  const handlePasswordConfirm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputPasswordConfirm = event.target.value;
    if (!inputPasswordConfirm) {
      setPasswordConfirmError(" ");
    } else if (inputPasswordConfirm !== password) {
      setPasswordConfirmError("비밀번호가 같지 않습니다");
    } else {
      setPasswordConfirmError(" ");
    }
    setPasswordconfirm(inputPasswordConfirm);
  };

  return (
    <div className="join">
      <form id="joinform" onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <section className="input_email">
          <input
            onChange={handleEmailChange}
            type="email"
            placeholder="이메일"
          ></input>
          <span className="email_error">{emailError}</span>
        </section>
        <section className="pw_wraps">
          <section className="input_pw">
            <input
              onChange={handlePasswordChange}
              type="password"
              placeholder="비밀번호"
            ></input>
            <span className="pw_error">{passwordError}</span>
          </section>
          <section className="input_pwChk">
            <input
              onChange={handlePasswordConfirm}
              type="password"
              placeholder="비밀번호 재확인"
            ></input>
            <span className="pwconfirm_error">{passwordconfirmError}</span>
          </section>
        </section>
        <section className="input_nickname">
          <input type="text" placeholder="닉네임"></input>
          <button className="nick_btn" onClick={goNicknameCheck}>
            중복확인
          </button>
        </section>
        <section className="input_local">
          <input type="text" placeholder="현재위치"></input>
          <button onClick={goLocation}>위치확인</button>
        </section>
        <button className="join_btn" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Join;
