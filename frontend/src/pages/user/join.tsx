import * as React from "react";
import axios from "axios";
import { BaseUrl } from "../../util/axiosApi";
//material ui
import {Stack,Typography,Box,Grid, TextField,Button} from "@mui/material";
import { WidthFull } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Join : React.FC = () => {

  //navigate
  const navigate = useNavigate();

  const goEmailCheck = ()=>{
    navigate('/emailcheck')
  };

  const goNicknameCheck = () => {
    navigate('/nicknamecheck')
  };

  const goLogin = () => {
    navigate('/login')
  }

  const goJoin = () => {
    navigate('/join')
  }

  const goLocation = () => {
    navigate('/location')
  }
  
  //user
  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [passwordconfirm , setPasswordconfirm] = useState('');
  const [nickname , setNickname] = useState('');
  
  //통신
  const Join = () => {
    const url = BaseUrl + "/user/signup"
      axios.post(url, {
        headers: { "Content-Type" : "application/json"},
        body: {email:email, password:password, nickname:nickname }
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

  //유효성 검사

    //에러메세지 
    const[emailError , setEmailError] = useState("");
    const[passwordError , setPasswordError] = useState("");
    const[passwordconfirmError , setPasswordConfirmError] = useState("");

  //유효성 검사 함수
    const validateEmail = (email: string):boolean => {
      const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
      return regex.test(email);
    }
  
    const validatePassword = (password: string):boolean => {
      return password.length >=5;
    }

    const handleEmailChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      const inputEmail = event.target.value;

      if(!validateEmail(inputEmail)){
        setEmailError("이메일 형식이 올바르지 않습니다.");
      }else{
        setEmailError("");
      }
      setEmail(inputEmail);
    };

    const handlePasswordChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      const inputPassword = event.target.value;
      
      if(!validatePassword(inputPassword)){
        setPasswordError("비밀번호 형식이 올바르지 않습니다.");
      }else{
        setPasswordError("");
      }
      setPassword(inputPassword);
    }

    const handlePasswordConfirm = (event:React.ChangeEvent<HTMLInputElement>) => {
      const inputPasswordConfirm = event.target.value;
      if(inputPasswordConfirm!==password){
        setPasswordConfirmError("비밀번호가 같지 않습니다");
      }else{
        setPasswordConfirmError("");
      }
      setPasswordconfirm(inputPasswordConfirm);
    }


  return(
    <div className="join">
      <Box sx={{display:"flex" , justifyContent:"center", alignItems:"center"}}> 
      <form>
        <Grid>
          <Grid item xs={12}>
            <Typography sx={{fontSize:32 , pb:3,textAlign:'center'}}>회원가입</Typography>
            <Stack direction="row">
              <TextField name="email" type="email" placeholder="이메일" value={email} onChange={handleEmailChange} sx={{ backgroundColor:"#F5F5F5", width:500}}></TextField>
              {emailError &&(<Typography color='error' variant='caption'>{emailError}</Typography>)}
              <Button onClick={()=>{goEmailCheck()}}sx={{color:'white', backgroundColor:'#FF7474', width:100}}>인증</Button>
            </Stack>
            <Stack>
              <TextField name="password" type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} sx={{mt:2, backgroundColor:"#F5F5F5"}}></TextField>
              {passwordError &&(<Typography color='error' variant='caption'>{passwordError}</Typography>)}
            </Stack>
            <Stack>
              <TextField name="passwordconfirm" type="password" placeholder="비밀번호 재확인" value={passwordconfirm} onChange={handlePasswordConfirm} sx={{mt:2, backgroundColor:"#F5F5F5"}}></TextField>
              {passwordconfirmError &&(<Typography color='error' variant='caption'>{passwordconfirmError}</Typography>)}
            </Stack>
            <Stack direction='row'>
              <TextField type="text" placeholder="닉네임" sx={{ mt:2, backgroundColor:"#F5F5F5", width:500}}></TextField><Button onClick={()=>{goNicknameCheck()}}sx={{mt:2, color:'white', backgroundColor:'#FF7474', width:100}}>중복확인</Button>
            </Stack>
            <Stack direction='row'>
              <TextField type="text" placeholder="현재위치" sx={{mt:2 , backgroundColor:"#F5F5F5", width:500}}></TextField>
              <Button onClick={()=>{goLocation()}}sx={{mt:2, color:'white', backgroundColor:'#FF7474', width:100}}>위치확인</Button>
            </Stack>
            <Stack>
              <Button onClick={()=>{Join()}}type="submit" sx={{color:'white', backgroundColor:'#FF7474' , mt:2 , width:600}}>회원가입</Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </Box>
    </div>
  );
}

export default Join;