import * as React from 'react';
import User from "../components/user";
import { Box, Stack, Tabs, Tab, Typography,  } from '@mui/material';
import { useNavigate} from 'react-router-dom';


const Mypage: React.FC = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);
    const goBookmark = () => {
        navigate('/mypage')
    };
    const goManage = (state: number) => {
        navigate('/review',  { state: state })
    };
    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
      const handleChange = (event: React.SyntheticEvent, newValue: number) => {
          setValue(newValue);
      };
    return (
        <div>
          <Stack direction={'row'} spacing={2} className='mypagecontents'>
             <User/>
             </Stack>
             <Box sx={{ width: '100%' }}>
             <Box >
             <Tabs
               value={value}
               onChange={handleChange}
               textColor="secondary"
               indicatorColor="secondary"
               aria-label="secondary tabs example"
               sx={{ borderRight: 1, borderColor: 'divider' }}>
                <Tab label="북마크" value={0}  {...a11yProps(0)} onClick={() => { goBookmark(); }} />
                <Tab label="내가 쓴 리뷰 " value={1}  {...a11yProps(1)} onClick={() => { goManage(1);}} />
            </Tabs>
            </Box>
             </Box>
           <Box sx={{ width: '100%' }} >
             <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h5" marginTop={3} marginLeft={3} gutterBottom>
              북마크 
              </Typography>
            </Stack>
          </Box>
        </div>
    );
}
 
export default Mypage;