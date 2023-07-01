import * as React from 'react';
import { Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Avatar, 
         Box, 
         Divider, 
         ListItem, 
         ListItemButton, 
         ListItemIcon, 
         ListItemText, 
         Stack, 
         Typography,} from '@mui/material';


function User(): React.ReactElement {
    const navigate = useNavigate();
    const goUserUpdate = () => {
        navigate('/userupdate')
    };
    
    return(
        <div className='user'>
            <Box sx={{ width: '100%' }}>
            <Stack direction={'row'} spacing={2} alignItems="center" >
                    <Box sx={{ margin:3 }}>
                        <Stack  direction="row" spacing={10} alignItems="center" >
                            <Avatar sx={{ bgcolor:'green', width:100, height:100 }}>닉네임</Avatar>
                        </Stack>
                        </Box>
                    <Divider/>
                    <Typography sx={{ fontSize:15 }}>북마크</Typography>
                    <Typography sx={{ fontSize:15 }}>리뷰</Typography>
                    <Divider/>
                    <Box sx={{ height:50, width:200 }} onClick={() => { goUserUpdate(); }} >
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Settings/>
                                </ListItemIcon>
                                <ListItemText primary="정보 수정" />
                            </ListItemButton>
                        </ListItem>
                    </Box>
                </Stack>
            </Box>
        </div>
      );
    }

export default User;