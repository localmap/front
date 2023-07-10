import React, { useEffect } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../reducers/index'
import { set } from '../reducers/user/userReducer'
import logo from '../pages/img/logo.png'
import mypage from '../pages/img/mypage.png'
import logout from '../pages/img/logout.png'
import login from '../pages/img/log-in.png'
import data from '../util/data'
import { setSearchResults } from '../reducers/header/headerReducer'
import { useState } from 'react'

const Header: React.FC = () => {
  //navigate
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  const currentUser = useSelector(
    (state: RootState) => state.userReducer.accessToken
  )
  const dispatch = useDispatch()

  const goLogin = () => {
    navigate('/login')
  }
  
  const goMypage = () => {
    navigate('mypage_bookmark')
  }

  //로그아웃
  const doLogOut = () => {
    dispatch(set({ accessToken: '', refreshToken: '' }))
    goHome()
  }

  //로그인
  const LoginButton = () => {
    if (currentUser == '') {
      return (
        <button className='login_btn'
          onClick={() => {
            goLogin()
          }}
        >
          <img className='login_logo' src={login}></img>
        </button>
      )
    } else {
      return (
        <button className='logout_btn'
          onClick={() => {
            doLogOut()
          }}
        >
          <img className='logout_logo'src={logout}></img>
        </button>
      )
    }
  }


  // 검색기능구현
  const { searchResult } = useSelector((state: RootState) => state.headerReducer);

  
  
  //사용자입력값
  const [inputcontent , setInputContent] = useState('');
  const getValue = (e: { target: { value: React.SetStateAction<string> } }) => {
    setInputContent(e.target.value);
  };

  //출력용 목업 데이터값
  const [search_result , setSearch_result] = useState(data);
  
  //상태가없데이트 될때 로그출력
  useEffect(()=> {
    console.log(search_result);
  },[search_result]);


  const goSearch = () => {
    //데이터 필터링
    const filterData = 
    data.filter(item => item.food.includes(inputcontent)); 
    setSearch_result(filterData);
    navigate(`/search_result/${inputcontent}`)
    dispatch(setSearchResults(filterData));
  };



  return (
    <div>
      <header className="App-header">
          <div className="App-header-logo" onClick={() => { goHome() }}>
            <img className="logo_img" src='https://cdn-icons-png.flaticon.com/128/2953/2953627.png'></img>
          </div>
          <div className='search_wrap'>
            <input className='search_input' type='text' placeholder='검색어를 입력하세요' onChange={getValue}></input>
            <button className='search_button' onClick={()=> {goSearch()}}>검색</button>
          </div>

          <div className="App-header-profile-icons">
            <button className='mypage_btn'
              onClick={() => {
                goMypage()
              }}
            >
              <img className='mypage_logo' src={mypage}></img>
            </button>
            <LoginButton />
        </div>
      </header>
    </div>
    
  )
}

export default Header