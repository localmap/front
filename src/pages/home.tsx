import * as React from 'react';
import {Grid} from "../elements";
import { Button } from '../elements';
import styled from "styled-components";
import Restaurant from '../components/restaurant';
import { useDispatch, useSelector } from "react-redux";

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

  return (
    <div className="home">
      <div className='Home_maps'>
        <p>지도 자리</p>
      </div>
      <Grid bgcolor=" rgb(247, 247, 247)">
        <SubTitle>주변 인기 맛집</SubTitle>
        <GridBox>
              {.map((p) => {
                return (
                  <Restaurant key={p.productId} {...p}>
                  </Restaurant>
                );
              })}
            </GridBox>
            <Button> 더보기 </Button>
        </Grid>
        <Grid bgcolor=" rgb(247, 247, 247)">
        <SubTitle>이벤트 중인 맛집</SubTitle>
        <GridBox>
              {.map((p) => {
                return (
                  <Restaurant key={p.productId} {...p}>
                  </Restaurant>
                );
              })}
            </GridBox>
            <Button> 더보기 </Button>
        </Grid>
        <Grid bgcolor=" rgb(247, 247, 247)">
        <SubTitle>에디터 특집</SubTitle>
        <GridBox>
              {.map((p) => {
                return (
                  <Restaurant key={p.productId} {...p}>
                  </Restaurant>
                );
              })}
            </GridBox>
            <Button> 더보기 </Button>
        </Grid>
      </div>
  )
}

export default Home
