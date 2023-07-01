import React from 'react'
import '../../App.css'
import { styled, alpha } from '@mui/material/styles'
import { Box, Button, Stack, InputBase, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../reducers/index'
import { set } from '../../reducers/userReducer'
import logo from '../../pages/img/logo.png'

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}))

const Header2: React.FC = () => {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  const currentUser = useSelector((state: RootState) => state.userReducer.type)
  const dispatch = useDispatch()

  const goLogin = () => {
    navigate('/login')
  }

  const doLogOut = () => {
    dispatch(set({ type: '', email: '' }))
    goHome()
  }

  const LoginButton = () => {
    if (currentUser == '') {
      return (
        <Button
          variant="text"
          onClick={() => {
            goLogin()
          }}
        >
          LogIn
        </Button>
      )
    } else {
      return (
        <Button
          variant="text"
          onClick={() => {
            doLogOut()
          }}
        >
          LogOut
        </Button>
      )
    }
  }

  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <header
        className="App-header"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 4, md: 6 }}
        >
          <div className="App-header-logo">
            <Box
              component="img"
              sx={{ height: 50, pl: 5 }}
              src={logo}
              onClick={() => {
                goHome()
              }}
            />
          </div>
          <div className="App-header-profile-icons">
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ paddingLeft: 60 }}>
              <LoginButton />
            </Box>
          </div>
        </Stack>
      </header>
    </Box>
  )
}

export default Header2
