import '../../assets/styles/css/review_write.css'
import { useState } from 'react';
import Choose_star from '../../components/choose_star';
const review_write: React.FC = () => {

    return (
        <div className='review_write'>
            <div className='review_title'>
                <strong>식당</strong>에 대한 솔직한 리뷰를 써주세요.
            </div>
            <Choose_star/>
            <textarea></textarea>
            <p>0/500</p>
            <input className='file_upload' type='file' accept='image/*'/>
            <div className='location_section'>
                <div>위치인증</div>
                <button  type='button' className='location_section_btn'></button>
            </div>
            <hr/>
            <div className='button_wrap'>
                <button className='close_btn'>취소</button><button className='upload_btn'>작성</button>
            </div>
        </div>
    );
}

export default review_write;