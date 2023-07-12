import '../../assets/styles/css/store_info.css'
import Review_picture from '../../components/review_picture';
const Store_info: React.FC = () => {
    return (
        <div className="store_info">
            <Review_picture/>
            <div className='left_area'>
                <div className='side_map'>지도부분</div>
                <strong>주변 인기 식당</strong>
                <div className='popular_list'>
                    <div className='popular_1_wrap'>
                        <img className='popular_1'></img>
                        <p>양고기맛집(성수점)<strong>4.6</strong></p>
                        <span>성수역 - 기타 중식</span>
                        <br/>
                        <img className='info_img'></img><span>65,001</span>
                        <img className='info_img2'></img><span>36</span>
                    </div>
                </div>
                <div className='popular_list2'>
                    <div className='popular_2_wrap'>
                        <img className='popular_2'></img>
                        <p>양고기맛집(성수점)<strong>4.6</strong></p>
                        <span>성수역 - 기타 중식</span>
                        <br/>
                        <img className='info_img'></img><span>65,001</span>
                        <img className='info_img2'></img><span>36</span>
                    </div>
                </div>
            </div>
            <div className='main_content'>
            </div>
        </div>
    );
}

export default Store_info;