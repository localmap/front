import * as React from 'react';
import { useNavigate} from 'react-router-dom';
import User from "../components/user";
import { 
  Box, 
  Stack, 
  Tabs, 
  Tab, 
  Typography, 
  Divider, 
  Card,
  CardActionArea,
  CardContent,
  CardMedia, 
  Checkbox, 
  Grid  } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';



const Mypage: React.FC = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);

    const [isBookmarkSelected, setisBookmarkSelectedValue] = React.useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
            <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 10, md: 10 }}>
                 {Array.from(Array(5)).map((_, index) => (
                   <Grid item xs={2} sm={2} md={2} key={index}>
                     <Card>
                       <CardActionArea>
                        <CardContent>
                         <CardMedia
                            component="img"
                            sx={{ width: 200, align: 'center' }}
                            image="http://placehold.it/150x150"
                            alt="Paella dish"
                          />
                        </CardContent>
                        <Checkbox 
                             sx={{ float: 'right'}} {...label}
                             icon={<BookmarkBorderIcon />} 
                             checkedIcon={<BookmarkIcon />}
                             checked={isBookmarkSelected}
                         />  
                       <CardContent>
                     <Typography
                         gutterBottom
                         variant="h5"
                         component="div"
                         align="center"
                      >
                      음식점 이름
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      별표
                    </Typography>
                    <Divider />
                    <Box sx={{ m: 2 }}>
                      <Stack direction="row" spacing={3}>
                        <Box
                          borderRadius={1}
                          sx={{
                            width: 50,
                            height: 30,
                            backgroundColor: 'grey.300'
                          }}
                        >
                          위치
                        </Box>
                        <Box
                          borderRadius={1}
                          sx={{
                            width: 50,
                            height: 30,
                            backgroundColor: 'grey.300'
                          }}
                        >
                          음식 정보
                        </Box>
                      </Stack>
                    </Box>
                    <Divider />
                  </CardContent>
                </CardActionArea>
               </Card>
             </Grid>
             ))}
          </Grid>
          </Box>
        </div>
    );
}
 
export default Mypage;