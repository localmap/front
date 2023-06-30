import * as React from 'react';
import User from "../components/user";
import { Box, Stack, Tabs, Tab, Typography, styled,  Paper,TableCell,  TableContainer, tableCellClasses,  Table, IconButton, TableBody, TableHead, TableRow,  } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate} from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
      }));
            
const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
         '&:last-child td, &:last-child th': {
        border: 0,
            },
              }));

const User_review: React.FC = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(1);
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
        <div className="user_review">
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
              내가 쓴 리뷰
              </Typography>
            </Stack>
            <Box>
            <Paper sx={{ width: '100%', mb: 2 }} >
              <TableContainer component={Paper}>
               <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                 <TableRow>
                  <StyledTableCell>음식점이름</StyledTableCell>
                  <StyledTableCell align="right">음식종류</StyledTableCell>
                  <StyledTableCell align="right">위치</StyledTableCell>
                  <StyledTableCell align="right">리뷰 작성시간</StyledTableCell>
                  <StyledTableCell align="right"> </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
               <StyledTableRow >
                 <StyledTableCell component="th" scope="row">음식점 이름</StyledTableCell>
                <StyledTableCell component="th" scope="row">음식 종류(한식)</StyledTableCell>
                <StyledTableCell align="right">서울</StyledTableCell>
                <StyledTableCell align="right">23.06.30 11:00</StyledTableCell>
                <StyledTableCell align="right">
                <IconButton>
                  <DeleteIcon fontSize="small"/>
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="right">
              </StyledTableCell>
            </StyledTableRow>
            </TableBody>
           </Table>
         </TableContainer>
        </Paper>
       </Box>
      </Box>
    </div>
    );
}
export default User_review;