import '../../assets/styles/css/location.css'
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Location_search from './location_search';



const Location:React.FC = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    return (
        <div className="location">
            <div className="title">
                <h1>회원가입</h1>
                <hr></hr>
            </div>
            <div className='search'>
                <label>
                    <input type='text' placeholder='동명(읍,면)으로 검색 (ex.서초동)'></input>
                </label>
            </div>
            <div className='search_btn'>
                <label>
                    <button onClick={()=>{setVisible(!visible)}}>
                        {visible?"현재 위치로찾기":"현재 위치로찾기"}
                    </button>
                    {visible&&<Location_search/>}
                </label>
            </div>
        </div>
    )
}

export default Location;