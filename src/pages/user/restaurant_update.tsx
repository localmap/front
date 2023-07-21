import '../../assets/styles/css/admin/restaurant_update.css'
import { useState } from 'react';
import Location_search from '../user/location_search';
import Choose_food from '../../components/choose_food';
import Choose_price from '../../components/choose_price';

const Restaurant_update:React.FC = () => {
    const [visible, setVisible] = useState(false);

    return(
        <div className="restaurant_write">
            <div className='restaurant_title'>
                식당이름
            </div>
            <input className='restaurant_name' placeholder='상호를 입력해 주세요'></input>
            <div className='location_select'>
                <div className='inner'>
                    <div>지역 및 위치 선택</div>
                    <button className='location_btn' onClick={()=>setVisible(!visible)} type='button'>
                    </button>
                    {visible && (
                        <div className='drop_down'>
                            <Location_search/>
                        </div>
                    )}
                </div>
            </div>
            <div className='picture_choose'>
                <div>대표 사진 선택</div>
                <button>+</button>
            </div>
            <input className='picture_input' placeholder='식당을 대표할 사진을 골라주세요'></input>
            <div className='food_type'>
                음식종류
            </div>
            <Choose_food/>
                <hr/>
            <Choose_price/>
            <hr/>
            <div className='menu'>
                <div className='menu_title'>
                    <div>메뉴</div>
                    <button>+</button>
                </div>
                <div className='menu_list'>
                    <div className='menu_img'></div>
                    <div className='menu_sub'>
                        <div>오렌지</div>
                        <div>5000원</div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='opening_hours'>
                영업시간
            </div>
            <input className='restaurant_name' placeholder='영업시간을 입력해 주세요'></input>
            <div className='event'>
                <div>이벤트</div>
                <button>+</button>
            </div>
            <input className='event_input' placeholder='식당을 대표할 사진을 골라주세요'></input>
            <div className='ceo'>
                <div>사장님 인사말</div>
                <button>+</button>
            </div>
            <input className='ceo_input' placeholder='인사말을 입력해 주세요'></input>
            <div className='button_wrap'>
                <button className='cancel_btn'>취소</button><button className='check_btn'>수정</button>
            </div>
        </div>
    );
}

export default Restaurant_update;