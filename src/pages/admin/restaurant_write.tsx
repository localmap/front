import '../../assets/styles/css/restaurant_write.css'
import { useState } from 'react';
import Location_search from '../user/location_search';

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
            <div className='food'>
                <div className='food_list'>
                        <div className='food1'></div>
                        <div className='food2'></div>
                        <div className='food3'></div>
                        <div className='food4'></div>
                </div>
                <div className='food_list2'>
                        <div className='food5'></div>
                        <div className='food6'></div>
                        <div className='food7'></div>
                        <div className='food8'></div>
                </div>
                <hr/>
            </div>
            <div className='price'>
                <div className='price_check_title'>
                    가격1인당
                </div>
                <div className='price_check'>
                    <div className='price1'></div>
                    <div className='price2'></div>
                    <div className='price3'></div>
                    <div className='price4'></div>
                </div>
                <div className='price_list'>
                    <div className='price_list1'>만원미만</div>
                    <div className='price_list2'>일만원대</div>
                    <div className='price_list3'>이만원대</div>
                    <div className='price_list4'>삼만원이상</div>
                </div>
            </div>
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
        </div>
    );
}

export default Restaurant_write;