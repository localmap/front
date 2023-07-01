import { Box, Button, TextField, Typography } from "@mui/material";
import * as React from 'react';
import { useNavigate } from "react-router-dom";

const Pwsearch: React.FC = () => {
    const navigate = useNavigate();
    const goPwReset = () => {
        navigate('/pwreset')
    };
    return (
        <div className="pwsearch">
            <Box sx={{display: 'flex',
                       position:'relative', 
                       width:400, 
                       height:400, 
                       margin:'auto',
                       marginLeft: 70,
                       textAlign:'center',
                       border: 1, 
                       borderRadius: 5, 
                       backgroundColor:'#ffffff', 
                       flexDirection: 'column', 
                       align: "center",
                       mt:5, 
                       pl:3,
                       pr:3}}
                       >
              <Typography sx={{ fontSize: 20, fontWeight:'bold' }} paddingTop={5} color="#434343" gutterBottom>
                비밀번호를 잊어버렸나요?
              </Typography>
              <Typography variant="body2" align="center" marginBottom={8}>
                {"가입시 작성한 이메일을 입력해주세요. "}
              </Typography>
                  <TextField
                    autoFocus
                    autoComplete="email"
                    fullWidth
                    label="Email"
                    margin="normal"
                    name="email"
                  />
                  <Button variant="contained" 
                          color="primary" 
                          onClick={() => { goPwReset(); }}>
                    확인
                  </Button>
            </Box>
        </div>
      );
}
 export default Pwsearch;