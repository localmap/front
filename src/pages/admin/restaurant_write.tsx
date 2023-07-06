import '../../assets/styles/css/restaurant_write.css'
import { useState } from 'react';
import Location_search from '../user/location_search';
import Choose_food from '../../components/choose_food';
import Choose_price from '../../components/choose_price';

const Restaurant_write:React.FC = () => {
    const [visible, setVisible] = useState(false);

    return(
        <div className="restaurant_write">
            <div className='title'>
                식당이름
            </div>
            <input placeholder='상호를 입력해 주세요'></input>
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
            <hr/>
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
            <div className='hours_title'>
                영업시간
            </div>
            <input placeholder='영업 시간을 입력해 주세요'></input>
            <div className='button_wrap'>
                <button className='cancel_btn'>취소</button><button className='check_btn'>확인</button>
            </div>
        </div>
    );
}

export default Restaurant_write;