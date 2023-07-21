import * as React from "react";
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/css/board/event_detail.css'


const Event_detail:React.FC = () => {
    const navigate = useNavigate();
    
    const goStore_Info = () => {
        navigate('/store_info')
      };
    return(
        <div className="event_detail">
            <div className='img'>
                <img src="https://mimg.segye.com/content/image/2021/01/07/20210107516500.jpg"></img>
            </div>
            <div className='event_detail_title'>
                [강남역]음식점이름
            </div>
            <div className='info_btn'>
                <button type='button' onClick={goStore_Info}>식당 정보보기</button>
            </div>
            <div className='event_title'>
                이벤트 내용
            </div>
            <div className='event_content'>
                <strong>이벤트 기간 : 93일</strong> (2023-05-31 ~ 2023-08-31)
            </div>
            <div className='origin_price'>₩42,900</div>
            <div className='sale_wrap'>
                <div className='percent'><strong>15%</strong> ₩36,465</div>
            </div>
            <hr className="middle_line"/>
            <div className='middle_title'>방문 포장 가능한 EAT딜입니다.</div>
            <div className='subtitle'>식당소개</div>
            <ul className='content'>
                <li>2016년에 이태원에 처음 오픈한 모터시티는 사각모양의 두꺼운 도우가 시그니쳐인 디트로이트 스타일 피자 레스토랑
                    입니다. 세계 피자 챔피언, Shawn Randazzo 에게 직접 인증을 받고 한국에서 점차 인지도를 쌓아 여러분에게 더욱 더
                    좋은 퀄리티의 피자, 서비스 드릴 수 있도록 노력하고 있습니다! 모터시티 이제 강남점에서도 만나 보실 수 있습니다! MO
                    TOR CITY HUSTLES HARDER
                </li>
            </ul>
            <div className='subtitle'>메뉴소개</div>
            <ul className='content'>
                <li>피자 택 1 + 프라이즈 위드 퀘소 + 소프트 드링크 1</li>
                <li>모터시티 베스트 2인 세트 메뉴</li>
            </ul>
            <div className="subtitle"> *유의사항 (꼭! 확인해주세요)</div>
            <ul className="content">
                <li>사용기간: 구매 시점으로부터 93일</li>
                <li>특정 피자 선택 시 현장 추가 결제(최대 2,000원)가 발생할 수 있습니다.</li>
                <li>본 EAT딜 상품은 방문 포장이 가능합니다. 매장 연락처로 미리 주문해주시면 대기시간을 줄일 수 있습니다.</li>
                <li>옵션 당 1인 1매만 구매 가능합니다.</li>
                <li>테이블 당 1매만 사용 가능합니다.</li>
                <li>구매 전 전용 지점을 꼭 확인해주세요.</li>
                <li>다른 쿠폰 및 딜과 중복 사용 불가합니다.</li>
                <li>양도 및 재판매 불가합니다.</li>
                <li>방문 전 영업시간 및 휴무일 확인을 부탁드립니다.</li>
            </ul>
            <div className="subtitle">*사용 방법</div>
            <ul className="content">
                <li>구매하신 EAT딜은 최신 버전 앱에서만 사용 가능합니다.</li>
                <li>결제 시 망고플레이트 앱 👉 내정보 👉 구매한 EAT딜을 선택하여 매장에 비치된 QR코드를 스캔합니다.</li>
                <li>QR코드 스캔이 불가능할 시 매장 직원에게 화면 하단 12자리 숫자 코드를 보여주세요.</li>
                <li>사용 처리가 완료된 EAT딜은 재사용 및 환불 불가합니다.</li>
            </ul>
        </div>
    );
}

export default Event_detail;
