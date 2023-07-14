import '../../assets/styles/css/store_info.css'
import Review_picture from '../../components/review_picture';
const Store_info: React.FC = () => {
    return (
        <div className="store_info">
            <Review_picture />

            <aside className='left_area'>
                <div className='side_map'>지도부분</div>
                <strong>주변 인기 식당</strong>
                <div className='popular_list'>
                    <div className='popular_1_wrap'>
                        <img className='popular_1'></img>
                        <p>양고기맛집(성수점)<strong>4.6</strong></p>
                        <span>성수역 - 기타 중식</span>
                        <br />
                        <img className='info_img'></img><span>65,001</span>
                        <img className='info_img2'></img><span>36</span>
                    </div>
                </div>
                <div className='popular_list2'>
                    <div className='popular_2_wrap'>
                        <img className='popular_2'></img>
                        <p>양고기맛집(성수점)<strong>4.6</strong></p>
                        <span>성수역 - 기타 중식</span>
                        <br />
                        <img className='info_img'></img><span>65,001</span>
                        <img className='info_img2'></img><span>36</span>
                    </div>
                </div>
            </aside>

            <div className='main_content'>
                <div className='store_title'>
                    <div className='title_wrap'>음식점 이름 <strong>별점</strong></div>
                    <div className='btn_wraps'>
                        <button className='edit_btn'><img className='edit_logo' src='https://cdn-icons-png.flaticon.com/128/2356/2356780.png' /></button>
                        <button className='favorites_btn'><img className='favorites_logo' src='https://cdn-icons-png.flaticon.com/128/3551/3551662.png' /></button>
                    </div>
                </div>
                <div className='sub_title'>
                    <p>조회수/리뷰수/북마크수</p>
                    <hr></hr>
                    <p>주소</p>
                    <p>전화번호</p>
                    <p>음식종류</p>
                    <p>가격대</p>
                    <div className='date_info'>
                        <div>웹사이트</div><div>업데이트:날짜기입</div>
                    </div>
                    <p>사장님 인사말</p>
                    <hr />
                </div>
                <div className='middle_text'>
                    <div>이벤트</div><div>최신순으로</div>
                </div>
                <div className='event_wraps'>
                    <div className='event_title'>이벤트 제목 : 오늘은 내가 쏜다!</div>
                    <div className='event_content'>
                        이벤트내용 : 음식을 먹고 사진과 함께 리뷰를 남겨주시는 분들께 사이드메뉴를 드립니다.
                        <p>1. 소떡소떡</p>
                        <p>2. 사이다 355ml캔</p>
                        <p>3. 콜라 355ml 캔</p>
                        <p>4. 오븐스파게티</p>
                    </div>
                </div>
                <hr />
                <div className='review_wraps'>
                    <div className='review_title'>
                        <div>리뷰 (해당 식당리뷰숫자) </div><div>리뷰전체 / 리뷰순으로 정렬</div>
                    </div>
                    <div className='review_content'>
                        <div className='user_review'>
                            <div className='review_title'>
                                <div>리뷰작성시간</div><div>위치인증 O 리뷰</div>
                            </div>
                            <div className='person_review'>
                                <div className='user_logo'>
                                    <img src='https://cdn-icons-png.flaticon.com/128/3177/3177440.png'></img>
                                </div>
                                <div className='user_text'>
                                    <div>
                                        리뷰갯수
                                    </div>
                                    <div>
                                        평균별점
                                    </div>
                                </div>
                            </div>
                            <div className='user_nick_review'>
                                <div className='user_nick'>
                                    유저닉네임
                                </div>
                                <div className='user_nick_date'>
                                    2023/07/05 정말맛있습니다 꼭 가보세요 후회안함!
                                </div>
                            </div>
                            <div className='person_review'>
                                <div className='user_logo'>
                                    <img src='https://cdn-icons-png.flaticon.com/128/3177/3177440.png'></img>
                                </div>
                                <div className='user_text'>
                                    <div>
                                        리뷰갯수
                                    </div>
                                    <div>
                                        평균별점
                                    </div>
                                </div>
                            </div>
                            <div className='user_nick_review'>
                                <div className='user_nick'>
                                    유저닉네임
                                </div>
                                <div className='user_nick_date'>
                                    2023/07/05 정말맛있습니다 꼭 가보세요 후회안함!
                                </div>
                            </div>
                            <div className='person_review'>
                                <div className='user_logo'>
                                    <img src='https://cdn-icons-png.flaticon.com/128/3177/3177440.png'></img>
                                </div>
                                <div className='user_text'>
                                    <div>
                                        리뷰갯수
                                    </div>
                                    <div>
                                        평균별점
                                    </div>
                                </div>
                            </div>
                            <div className='user_nick_review'>
                                <div className='user_nick'>
                                    유저닉네임
                                </div>
                                <div className='user_nick_date'>
                                    2023/07/05 정말맛있습니다 꼭 가보세요 후회안함!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Store_info;