import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../reducers/index'
import { set } from '../reducers/user/userReducer'
import logo from '../pages/img/logo.png'
import mypage from '../pages/img/mypage.png'
import logout from '../pages/img/logout.png'
import login from '../pages/img/log-in.png'


const Header: React.FC = () => {
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

  const doLogOut = () => {
    dispatch(set({ accessToken: '', refreshToken: '' }))
    goHome()
  }

  const goMypage = () => {
    navigate('mypage_bookmark')
  }

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

  return (
    <div>
      <header className="App-header">
          <div className="App-header-logo" onClick={() => { goHome() }}>
            <img className="logo_img" src={logo}></img>
          </div>
          <div className='search_wrap'>
            <input className='search_input' type='text' placeholder='검색어를 입력하세요'></input>
            <button className='search_button'>검색</button>
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
