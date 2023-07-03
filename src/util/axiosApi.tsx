import axios from "axios";

export const BaseUrl = "http://127.0.0.1:8000/api"

export type Notice = {
    id: string
}

export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

/*회원가입 통신*/
export const join = (email:string,password:string,nickname:string,goLogin:()=>void,goJoin:()=>void) => {
    const url = BaseUrl + "/user/signup"
      axios.post(url, {
        headers: { "Content-Type" : "application/json"},
        body: {email:email, password:password, nickname:nickname},
      })
      .then(function(response) {
        alert('가입이 완료되었습니다.')
        goLogin()
      })
      .catch(function(error){
        alert('회원정보를 확인해주세요')
        goJoin()
      })
};
