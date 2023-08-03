import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import User from "../../components/user";
import "../../assets/styles/css/user/mypage.css";
import "../../assets/styles/css/user/user_bookmark.css";
import { Grid, Image, Text } from "../../elements";

const Mypage: React.FC = () => {
  const navigate = useNavigate();

  const goStoreInfo = () => {
    navigate("/info");
  };
  const activeStyle = {
    color: "#79c859ec",
    fontWeight: 500,
  };
  return (
    <div>
      <User />
      <nav id="pagelist">
        <ul>
          <li>
            <NavLink
              className="link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/mypage_bookmark"
            >
              북마크
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/mypage_review"
            >
              내가 쓴 리뷰
            </NavLink>
          </li>
        </ul>
      </nav>
      <div id="name">
        <p>북마크</p>
      </div>
      <div className="bookmark_table">
        <Grid _onClick={() => goStoreInfo()} margin="10px" height="506px">
          <Image
            width="249px"
            height="320px"
            src={"http://placehold.it/50x50"}
          ></Image>
          <Text margin="12px 0px 0px 0px" size="16px">
            음식점 이름
          </Text>
          <Text padding="9px 0px 0px 0px" size="16px" weight="800">
            위치 - 음식종류
          </Text>
        </Grid>
      </div>
    </div>
  );
};

export default Mypage;
