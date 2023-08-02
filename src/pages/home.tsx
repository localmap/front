import * as React from 'react';
import { Button } from '../elements';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { Grid, Image , Text} from "../elements";

const Home: React.FC = () => {

  const GridBox = styled.div`
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
    max-width: 1050px;
  `;
  const SubTitle = styled.div`
   margin-top: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.8em;
   font-weight: bold;
   padding: 79px 0 35px;
  `;
const navigate = useNavigate();

const goStoreInfo = () => {
    navigate('/info')
  };
  
  return (
    <div className="home">
      <div className='Home_maps'>
        <p>지도</p>
      </div>
      <Grid bgcolor=" rgb(247, 247, 247)">
        <SubTitle>주변 인기 맛집</SubTitle>
        <Grid 
          _onClick={() => goStoreInfo()}
            margin="10px" height="506px">
          <Image width="249px" height="320px" src={"http://placehold.it/50x50"}></Image>
          <Text margin="12px 0px 0px 0px"size="16px">음식점 이름</Text>
          <Text padding="9px 0px 0px 0px" size="16px" weight="800">위치 - 음식종류</Text>
                </Grid>
            <Button> 더보기 </Button>
        </Grid>
        <Grid bgcolor=" rgb(247, 247, 247)">
        <SubTitle>이벤트 중인 맛집</SubTitle>
        <Grid 
          _onClick={() => goStoreInfo()}
            margin="10px" height="506px">
          <Image width="249px" height="320px" src={"http://placehold.it/50x50"}></Image>
          <Text margin="12px 0px 0px 0px"size="16px">음식점 이름</Text>
          <Text padding="9px 0px 0px 0px" size="16px" weight="800">위치 - 음식종류</Text>
                </Grid>
            <Button> 더보기 </Button>
        </Grid>
        <Grid bgcolor=" rgb(247, 247, 247)">
        <SubTitle>에디터 특집</SubTitle>
        <Grid 
          _onClick={() => goStoreInfo()}
            margin="10px" height="506px">
          <Image width="249px" height="320px" src={"http://placehold.it/50x50"}></Image>
          <Text margin="12px 0px 0px 0px"size="16px">음식점 이름</Text>
          <Text padding="9px 0px 0px 0px" size="16px" weight="800">위치 - 음식종류</Text>
        </Grid>
            <Button> 더보기 </Button>
        </Grid>
      </div>
  )
}

export default Home
