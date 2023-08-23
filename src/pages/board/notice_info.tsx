const Notice_info: React.FC = () => {
  return (
    <div className="notice_info">
      <header className="header_info">
        <section className="notice_title">
          <strong>공지사항</strong>
          <div className="return_list">
            <a href="./notice_list">
              <button>
                <img className="return_logo"></img>
              </button>
              <span className="return_text">목록으로 돌아가기</span>
            </a>
          </div>
        </section>
        <hr className="start_hr" />
        <section className="notice_sub_title">
          <span className="th_type">공지</span>
          <span className="th_subject">7/14(금) 현재 발생중인 오류 안내</span>
          <span className="th_who">운영자</span>
          <span className="th_date">2023.07.10</span>
          <span className="th_count">조회수:13,927,777</span>
        </section>
      </header>

      <section className="notice_content">
        <p>안녕하세요. 운영자 김세훈입니다.</p>
        <p>현재 발생중인 오류들을 안내드립니다.</p>
        <p>지도를 불러오는 오류로 인해 이용에 불편을 끼쳐드려 죄송합니다.</p>
        <p className="error_content">
          이번 오류는 지도오류로 인해 사용자의 위치기반 지도가 활성화되지않는
          문제입니다.
        </p>
        <p className="bye">빠른 시일내에 조치하도록 하겠습니다.</p>
      </section>
      <hr className="end_hr" />
      <footer className="list_nav">
        <a className="before_board">
          <span>
            <img className="before_logo" />
          </span>
          <em>이전글</em>
          <span className="before_text">7/5일 공지사항안내</span>
        </a>
        <a className="next_board">
          <span>
            <img className="next_logo" />
          </span>
          <em>다음글</em>
          <span className="next_text">7/20일 리뷰이벤트 공지</span>
        </a>
      </footer>
    </div>
  );
};
export default Notice_info;
