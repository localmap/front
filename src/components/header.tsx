import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../reducers/index'
import { set } from '../reducers/user/userReducer'
import { setSearchResults } from '../reducers/header/headerReducer'
import { useState } from 'react'
import { HiMiniExclamationCircle, HiMapPin,HiMagnifyingGlass, HiOutlineUserCircle,HiOutlineUserPlus,HiOutlineUserMinus} from "react-icons/hi2";
import '../assets/styles/css/header.scss'

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

  const goResultepage = () => {
    navigate('/search_result')
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
        <HiOutlineUserPlus
          className="login_btn"
          onClick={() => {
            goLogin()
          }}
        >
        </HiOutlineUserPlus>
      )
    } else {
      return (
        <HiOutlineUserMinus
          className="logout_btn"
          onClick={() => {
            doLogOut()
          }}
        >
        </HiOutlineUserMinus>
      )
    }
  }

  //검색기능

  //사용자 입력값
  const [inputdata, setInputdata] = useState('');
  const getValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputdata(e.target.value);
  }

  const goSearch = (searchData:string) => {
    dispatch(setSearchResults(searchData))
    goResultepage();
  } 


  return (
    <div>
      <header className="App-header">
        <div
          className="App-header-logo"
          onClick={() => {
            goHome()
          }}
        >
          Local_Map
        </div>
        <div className="search_wrap">
          <HiMapPin/>
          <input
            className="search_input"
            type="text"
            placeholder="검색어를 입력하세요"
            onChange={getValue}
          ></input>
          <HiMagnifyingGlass 
          onClick={() => {
            goSearch(inputdata)
          }}/>
        </div>
        <div className="App-header-profile-icons">
          <HiOutlineUserCircle
            className="mypage_btn"
            onClick={() => {
              goMypage()
            }}
          />
          <HiMiniExclamationCircle className='alarm'/>
          <LoginButton />
        </div>
      </header>
    </div>
  )
}

export default Header
