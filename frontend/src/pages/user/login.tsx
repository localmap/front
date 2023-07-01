// project import
import FirebaseSocial from '../user/auth-forms/FirebaseSocial';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from '../../util/axiosApi';
import axios from 'axios';
import { set } from '../../reducers/userReducer'

// material-ui
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Box
} from '@mui/material';

const Login: React.FC = () => {

    const navigate = useNavigate();

    const goHome = () => {
      navigate('/')
    };
    const goJoin = () => {
      navigate('/join')
    };

    const goPwsearch = () => {
      navigate('/pwsearch')
    };

    const [email, setEmailValue] = React.useState('');
    const emailChange = (newValue: string) => {
        setEmailValue(newValue);
    };

    const [pw, setPwValue] = React.useState('');
    const pwChange = (newValue: string) => {
        setPwValue(newValue);
    };
    const dispatch = useDispatch();
    const [checked, setChecked] = React.useState(false);

    const login = () => {
      const url = BaseUrl + "/user/login/normal/"
      axios.post(url, {
          headers: 
          {
              "Content-Type": "application/json"
          },
          body: { id: email, pw: pw }
      })
      .then(function(response) {
          const {accessToken} = response.data.access_token;
          axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
          goHome()
      })
      .catch(function(error) {
          alert('로그인정보를 확인해 주세요')
      })
  };

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
    };

   return (
        <div className='login'>
          <Box sx={{marginLeft: 5}}>
          <Grid container spacing={3}>
           <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
             <Typography variant="h3">로그인</Typography>
             <Typography onClick={() => { goJoin() }} variant="body1" sx={{ textDecoration: 'none' }} color="primary">
              아직 회윈이 아니신가요?
             </Typography>
           </Stack>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-login">Email Address</InputLabel>
                  <OutlinedInput
                    onChange={(newValue) => emailChange(newValue.target.value)}
                    placeholder="Enter email address"
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-login">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    onChange={(newValue) => pwChange(newValue.target.value)} 
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Enter password"
                  />
                </Stack>
              </Grid>

              <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                        size="small"
                      />
                    }
                    label={<Typography variant="h6">Keep me sign in</Typography>}
                  />
                  <Typography variant="h6" onClick={() => { goPwsearch() }} color="text.primary">
                    Forgot Password?
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                  <Button onClick={(event) => login()} disableElevation fullWidth size="large"  variant="contained" color="primary">
                    Login
                  </Button>
              </Grid>
              <Grid item xs={12}>
                <Divider>
                  <Typography variant="caption"> Login with</Typography>
                </Divider>
              </Grid>
              <Grid item xs={12}>
                <FirebaseSocial />
              </Grid>
            </Grid>
          </Grid>
         </Grid>
       </Box>
      </div>
    );
}

export default Login;

