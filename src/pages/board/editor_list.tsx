import "../../assets/styles/css/board/editor_list.scss";
import Column_delete from "../modal/column_delete";
import { useState } from "react";
const Editor_list: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="editor_list">
      <p>맛집칼럼</p>
      <section className="res_column_list">
        <section className="res_column">
          <section className="column_img">
            <ul>
              <li>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR34xOOT-djMeaxG6qiB4u_70ayNgQhinO4TX3YEewt2XhDDY9c-AAehguosmdT4fBAI4&usqp=CAUhttps://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FUFJa7%2Fbtq3Dsep2ln%2FKbcjmbxb9ZPxrDKAcKUrrk%2Fimg.pnghttps://www.shutterstock.com/ko/image-photo/on-old-wooden-table-stand-bowl-1439957273"></img>
              </li>
            </ul>
          </section>
          <section className="column_info">
            <div className="columnist_info">
              <strong>김세훈칼럼</strong>
              <span>2023/07/28</span>
              <button onClick={() => setShowModal(true)}>삭제</button>
              {showModal && (
                <Column_delete
                  content="컬럼삭제"
                  _cashe=""
                  onClose={() => setShowModal(false)}
                />
              )}
            </div>
            <div className="column_tit">
              <strong>[맛잘알] '십고초려'는 기본, 꼭 가봐야한다.</strong>
            </div>
            <div className="column_detail">
              <p>
                요즘은 쇼핑몰 성공의 중요한 요소로 맛집 유치를 꼽습니다. 새로
                오픈한 쇼핑몰에 얼마나 많은, 유명한 맛집이 많은가로 성패가 갈릴
                정도입니다. 시흥프리미엄 아울렛도 예외는 아닙니다. SNS에서
                유명한...
              </p>
            </div>
          </section>
        </section>
        <section className="res_column">
          <section className="column_img">
            <ul>
              <li>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStTyAN_d6jCbQfCQwmR_C-0PKyOvM556WxyQ&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR34xOOT-djMeaxG6qiB4u_70ayNgQhinO4TX3YEewt2XhDDY9c-AAehguosmdT4fBAI4&usqp=CAUhttps://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FUFJa7%2Fbtq3Dsep2ln%2FKbcjmbxb9ZPxrDKAcKUrrk%2Fimg.pnghttps://www.shutterstock.com/ko/image-photo/on-old-wooden-table-stand-bowl-1439957273"></img>
              </li>
            </ul>
          </section>
          <section className="column_info">
            <div className="columnist_info">
              <strong>김세훈칼럼</strong>
              <span>2023/07/28</span>
            </div>
            <div className="column_tit">
              <strong>[목넘김굿] 아무에게도 알려주지않았던 숨은맛집</strong>
            </div>
            <div className="column_detail">
              <p>
                발품을팔아 찾고 찾아다녀, 드디어 찾아낸 숨은 맛집. sns에서도
                아직 알려지지않은 맛집이라 웨이팅이 길지않고 사장님의 요리실력과
                더불어 서비스도 만족할..
              </p>
            </div>
          </section>
        </section>
        <section className="res_column">
          <section className="column_img">
            <ul>
              <li>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCOkxiHIzvnIoH3Vx5VbfV0M1RmofkeG84Ou7cRkbCPjf5z_AGuX9avCYfNQ2OfoTlfzo&usqp=CAU"></img>
              </li>
            </ul>
          </section>
          <section className="column_info">
            <div className="columnist_info">
              <strong>김세훈칼럼</strong>
              <span>2023/07/28</span>
            </div>
            <div className="column_tit">
              <strong>[이열치열]이런 더운날에는 뜨거움으로 이겨내자!</strong>
            </div>
            <div className="column_detail">
              <p>
                무더운 여름날 보양식을 찾는이유는 뭘까? 더위를 더위로 이겨낸다는
                이열치열이라는 말이 괜히있는 말이아니다. 뜨끈한 보양식을 통해
                건강도 되찾고 입맛도되찾을수 있는 곳을 준비했다. 자 이제...
              </p>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Editor_list;
