import {Box,Stack,Typography,Button,TextField} from '@mui/material';

const EmailCheck: React.FC = () => {
    return(
        <div className="emailcheck">
            <Typography sx={{fontSize:32 , pb:3,textAlign:'center'}}>회원가입</Typography>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:"center"}}>
                <Stack direction="row">
                    <TextField type="text" placeholder="이메일" sx={{ backgroundColor:"#F5F5F5", width:500}}></TextField>
                </Stack>
            </Box>
            <Box sx={{display:'flex', justifyContent:'center',alignItems:'center' }}>
                <Button sx={{color:'white', backgroundColor:'#FF7474', width:500,mt:2}}>인증 메일발송</Button>
            </Box>
        </div>
    );
}

export default EmailCheck;