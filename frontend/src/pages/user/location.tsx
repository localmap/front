import {Stack,Typography,Box,Button,TextField,InputAdornment} from '@mui/material'
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Location_search from './location_search';



const Location:React.FC = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    return (
        <div className="location">
            <Typography sx={{fontSize:32 , pb:3,textAlign:'center'}}>회원가입</Typography>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:"center"}}>
                <Stack direction="row">
                    <TextField type="text" placeholder="동명(읍,면)으로 검색 (ex. 서초동)" sx={{ backgroundColor:"#F5F5F5", width:500}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <LocationOnIcon sx={{color:'#FF7474'}}/>
                                 </InputAdornment>
                            ),
                        }}
                    />
                </Stack>
            </Box>
            <Box sx={{display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Button onClick={()=> {setVisible(!visible)}}startIcon={<GpsFixedIcon/>} sx={{color:'white', backgroundColor:'#FF7474', width:500,mt:2}}>
                        {visible? '현재위치로 찾기' : '현재위치로 찾기'}
                </Button>
                {visible && <Location_search/>}
            </Box>
        </div>
    )
}

export default Location;