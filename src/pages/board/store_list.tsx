import '../../assets/styles/css/board/store_list.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Store_list: React.FC = () => {
    const [star1, setStar1] = useState(false);
    const [star2, setStar2] = useState(false);

    const navigate = useNavigate();
    const goStore_info = () => {
        navigate('/store_info');
    }
    return (
        <div className="store_list">
            <div className='list_subject'>
                <p>클릭수 / 2023-05-00(현재날짜)</p>
                <strong>oo맛집 목록</strong>
            </div>
            <div className='review'>
                <a onClick={() => {
                    goStore_info()
                }}>
                    <div className='food_img'>
                        <img src='https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'></img>
                    </div>
                </a>
                <div className='info'>
                    <span className='title'>
                        <a onClick={() => {
                            goStore_info()
                        }}>
                            음식점 이름
                        </a>
                    </span>
                    <strong>4.3</strong>
                    <div className='star_wrap'>
                        <button className='star_btn1' onClick={()=>setStar1(!star1)}
                        style={{backgroundImage:star1?`url('https://cdn-icons-png.flaticon.com/128/477/477406.png')`:`url('https://cdn-icons-png.flaticon.com/128/1828/1828970.png')`}}>
                        </button>
                    </div>
                </div>
                <div className='store_location'>
                        경기도 시흥시 정왕동
                </div>
                <div className='choose'>
                    <span>
                        <a>
                            더보기
                        </a>
                    </span>
                </div>
            </div>
            <div className='review'>
                <a onClick={() => {
                    goStore_info()
                }}>
                    <div className='food_img'>
                        <img src='https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFtYnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'></img>
                    </div>
                </a>
                <div className='info'>
                    <span className='title'>
                        <a onClick={() => {
                            goStore_info()
                        }}>
                            음식점 이름
                        </a>
                    </span>
                    <strong>4.3</strong>
                    <div className='star_wrap'>
                        <button className='star_btn1' onClick={()=>setStar2(!star2)}
                        style={{backgroundImage:star2?`url('https://cdn-icons-png.flaticon.com/128/477/477406.png')`:`url('https://cdn-icons-png.flaticon.com/128/1828/1828970.png')`}}>
                        </button>
                    </div>
                </div>
                <div className='store_location'>
                        경기도 시흥시 정왕동
                </div>
                <div className='choose'>
                    <span>
                        <a>
                            더보기
                        </a>
                    </span>
                </div>
            </div>
            <button type='button' className='more_btn'>더보기</button>
        </div>
    );
}

export default Store_list;
