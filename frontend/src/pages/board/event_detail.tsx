import { Stack,Box, Typography,Button } from "@mui/material";
import '../../App.css'
import InfoIcon from '@mui/icons-material/Info';

const Event_detail:React.FC = () => {
    return(
        <div className="event_detail">
            <Box sx={{display:'flex', justifyContent:'center' , alignItems:'center'}}>
                <Stack direction='column'width='48%'>
                    <Stack>
                        <img src="https://mimg.segye.com/content/image/2021/01/07/20210107516500.jpg"></img>
                    </Stack>
                    <Stack direction='column' sx={{marginTop:5}}>
                        <Box sx={{display:'flex' , justifyContent:'left', alignItems:'left'}}>
                            <Typography sx={{fontSize:20}}>[강남역]음식점이름</Typography>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'left' , alignItems:'left'}}>
                            <Button startIcon={<InfoIcon/>} sx={{border:1, borderRadius:3, color:'gray',mt:2,fontSize:15}}>식당 정보 보기</Button>
                        </Box>
                        <Box sx={{direction:'column' , display:'flex', justifyContent:'left' , alignItems:'left', mt:2}}>
                            <Typography sx={{fontWeight:40 , fontSize:18, color:'gray'}}>이벤트 내용</Typography>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'left' , alignItems:'left', mt:2}}>
                            <Typography sx={{fontWeight:'bold'}}>이벤트 기간 : 93일:</Typography><Typography>(2023-05-31 ~ 2023-06-31)</Typography>
                        </Box>
                        <Box sx={{display:'flex' , justifyContent:'right' , alignItems:'right'}}>
                            <Typography sx={{color:'#CBCBCB' , textDecoration:'line-through'}}>₩42,900</Typography>
                        </Box>
                        <Box sx={{display:'flex' , justifyContent:'right' , alignItems:'right', mt:2 , mb:2}}>
                            <Typography sx={{color:'#1FCEB6' , fontSize:23}}>15%</Typography><Typography sx={{fontSize:23}}>₩ 36,465</Typography>
                        </Box>
                        <hr style={{width:'100%' , borderTopColor:'#E9E9E9', borderTopWidth:'1px' , borderTopStyle:'solid'}}></hr>
                        <Box sx={{display:'flex' , justifyContent:'left' , alignItems:'left'}}>
                            <Typography sx={{fontSize:18 , mt:2}}>방문 포장 가능한 EAT딜입니다.</Typography>
                        </Box>
                        <br></br>
                        <Stack direction='column'>
                            <Box sx={{display:'flex' , justifyContent:'left' , alignItems:'left'}}>
                                <Typography sx={{fontSize:20, fontWeight:40}}>식당소개</Typography>
                            </Box>
                            <Box sx={{mt:2}}>
                                <Typography sx={{color:"#7F7F7F"}}><li>2016년에 이태원에 처음 오픈한 모터시티는 사각모양의 두꺼운 도우가 시그니쳐인 디트로이트 스타일 피자 레스토랑
                                    입니다. 세계 피자 챔피언, Shawn Randazzo 에게 직접 인증을 받고 한국에서 점차 인지도를 쌓아 여러분에게 더욱 더
                                    좋은 퀄리티의 피자, 서비스 드릴 수 있도록 노력하고 있습니다! 모터시티 이제 강남점에서도 만나 보실 수 있습니다! MO
                                    TOR CITY HUSTLES HARDER</li>
                               </Typography>
                            </Box>
                        </Stack>
                        <Stack direction='column' sx={{mt:2}}>
                            <Box sx={{display:'flex' , justifyContent:'left', alignItems:'left'}}>
                                <Typography sx={{fontWeight:40}}>메뉴소개</Typography>
                            </Box>
                            <Box sx={{display:'flex' , justifyContent:'left' , alignItems:'left'}}>
                                <Typography><li>피자 택 1 + 프라이즈 위드 퀘소 + 소프트 드링크 1</li></Typography>
                            </Box>
                        </Stack>
                        <Stack direction='column'>
                            <Box sx={{display:'flex' , justifyContent:'left' , alignItems:'left'}}>
                                <Typography><li>모터시티 베스트 2인 세트 메뉴</li></Typography>
                            </Box>
                        </Stack>
                        <Stack direction='column'>
                            <Box sx={{display:'flex', justifyContent:'left' , alignItems:'left'}}>
                                <ul>
                                    <li>사용 기간: 구매 시점으로부터 93일</li>
                                    <li>특정 피자 선택 시 현장 추가 결제(최대 2,000원)가 발생할 수 있습니다.</li>
                                    <li>본 EAT딜 상품은 방문 포장이 가능합니다. 매장 연락처로 미리 주문해주시면 대기시간을 줄일 수 있습니다.</li>
                                    <li>테이블 당 1매만 사용 가능합니다.</li>
                                    <li>다른 쿠폰 및 딜과 중복 사용 불가합니다.</li>
                                    <li>양도 및 재판매 불가합니다.</li>
                                    <li>방문 전 영업시간 및 휴무일 확인을 부탁드립니다.</li>
                                </ul>ㅕ
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </div>
    );
}

export default Event_detail;