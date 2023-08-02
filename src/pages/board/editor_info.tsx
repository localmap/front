import "../../assets/styles/css/board/editor_info.css";

const Editor_info: React.FC = () => {
  return (
    <div className="editor_info">
      <div className="column_title">
        <strong>이열치열 뚝배기로 여름을 이겨보자!</strong>
        <div className="group_wraps">
          <div className="group_name">
            <strong>Local_Map</strong>
            <div>로컬맵그룹</div>
            <div>2023/07/14</div>
          </div>
          <div className="btn_wraps">
            <button>
              <img
                className="heart_logo"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
              ></img>
            </button>
            <button>
              <img
                className="shaer_logo "
                src="https://cdn-icons-png.flaticon.com/128/1358/1358023.png"
              ></img>
            </button>
          </div>
        </div>
        <hr />
      </div>
      <div className="column_content">
        <div className="editor_info_sub_title">
          <strong>
            <p>
              더운 여름날을 책임 질 보양식! 뜨끈함으로 더위를 잡아낼수있는
              맛집을 소개합니다.
            </p>
            시원함을 경험하고 싶은 분들에게는 안성맞춤 맛집! 모두 체험해보세요.
          </strong>
          <div className="column_writer">칼럼리스트 : 김세훈</div>
        </div>
        <p>
          <p>
            사계절이 뚜렷한 농경사회였던 우리나라는 '복날'을 챙기는 풍습이있다.
          </p>
          <p>
            '절기' 개념을 농사헤 활용하던 시대는 지났지만, 자연의 주기에 맞춰
            생활양식을 조절하던 문화는 뿌리깊숙히 남아있다.
          </p>
          <p>
            초복,중복,말복의 삼복은 여름철 대표 절기다. 삼복기간은 여름중에서도
            가장 더운시기로 꼽힌다.
          </p>
        </p>
        <div className="food_wraps">
          <strong>보양식의 종류</strong>
          <div className="food_img">
            <img src="https://images.unsplash.com/photo-1562749606-0a9eb5a8a0f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJTgyJUJDJUVBJUIzJTg0JUVEJTgzJTk1fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"></img>
            <img src="https://media.istockphoto.com/id/973984194/ko/%EC%82%AC%EC%A7%84/%ED%95%9C%EA%B5%AD-%ED%98%88%EC%95%A1-%EC%86%8C%EC%8B%9C%EC%A7%80-%EC%88%98%ED%94%84.webp?b=1&s=170667a&w=0&k=20&c=9iNCUs0BiuCFYe-CSq1yTBJKYI3TOIKkA1zVrkKkgMk="></img>
            <img src="https://media.istockphoto.com/id/1407967618/ko/%EC%82%AC%EC%A7%84/%ED%95%9C%EA%B5%AD-%EC%A0%84%ED%86%B5-%EC%9D%8C%EC%8B%9D-%EC%87%A0%EA%B3%A0%EA%B8%B0-%EA%B0%88%EB%B9%84%ED%83%95-%EC%87%A0%EA%B3%A0%EA%B8%B0-%EC%A7%A7%EC%9D%80-%EA%B0%88%EB%B9%84-%EC%88%98%ED%94%84.webp?b=1&s=170667a&w=0&k=20&c=faHIHm_bLMY1X_hK0hRnmn9VAkvJlUH-132nzgPMFRU=" />
            <img src="https://media.istockphoto.com/id/668866758/ko/%EC%82%AC%EC%A7%84/%EB%A7%A4%EC%9A%B4-%EB%91%90-%EB%B6%80-%EC%88%98%ED%94%84.webp?b=1&s=170667a&w=0&k=20&c=Kidxe-M4MXCcKirvYjUyiMITQfopE0w8DPSb8zOaLhs=" />
          </div>
        </div>
        <div className="food_info">
          <p>다양한 보양식의 종류가있지만, 대표적인 4가지이다.</p>
          <p>왼쪽에서부터 삼계탕,순대국,갈비탕,해물탕 등이 있다.</p>
          <p>남녀노소 가라지않고 즐겨먹으며 쉽게 접할수있다는 점이 장점이다.</p>
          <p>
            이번 여름 장마도길어지고, 역대급 더위라고하는데 보양식으로
            몸보신하여 무덥고 습한여름을 잘 헤쳐나갔으면 좋겠다.
          </p>
        </div>
        <div className="columnist_wraps">
          <div className="columnist">
            <div className="columnist_picture">
              <img
                className="columnlist_img"
                src="https://images.unsplash.com/photo-1627796795540-18e2db6d3908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJThBJUE0JUVEJThFJTgwJUVDJUE3JTgwJUVCJUIwJUE1fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              ></img>
            </div>
            <div className="columnist_info">
              <strong>뚱이</strong>
              <p>음식평론가</p>
              <p>스펀지밥과 절친한 친구이며 게살버거를 잘 먹는다.</p>
              <p>집게리아의 단골손님.</p>
            </div>
          </div>
        </div>
        <div className="column_footer">
          <div className="footer_title">
            <h1>
              <span className="strong_text">추천 </span> 콘텐츠
            </h1>
          </div>
          <div className="th_column">
            <div className="th_title">
              <strong>트렌드 칼럼</strong>
              <span>2023/07/09</span>
            </div>
            <div className="th_content">
              <a>
                <span className="th_text">
                  [박병훈 기자의 맛집이야기] 강남엔 생각보다 맛집이없습니다
                </span>
              </a>
              <em>
                학원을 다니며 강남 주변 맛집을 돌아다녀 본 결과 생각보다 맛집은
                없...
              </em>
            </div>
          </div>
          <div className="th_column">
            <div className="th_title">
              <strong>트렌드 칼럼</strong>
              <span>2023/07/11</span>
            </div>
            <div className="th_content">
              <a>
                <span className="th_text">
                  [김세훈 기자의 반박] 박병훈 기자는 틀렸다
                </span>
              </a>
              <em>학원을 다니며 강남 주변에는 생각보다 숨겨진 맛집이 많다!</em>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor_info;
