import '../assets/styles/css/component/choose_star.css'
import { useState } from 'react'

const Choose_star:React.FC = () => {
    const [star1, setStar1] = useState(false);
    const [star2, setStar2] = useState(false);
    const [star3, setStar3] = useState(false);
    const [star4, setStar4] = useState(false);
    const [star5, setStar5] = useState(false);
    return(
        <div className='choose_star'>
            <button className='star_btn1' onClick={()=>setStar1(!star1)}
            style={{backgroundImage:star1?`url('https://cdn-icons-png.flaticon.com/128/477/477406.png')`:`url('https://cdn-icons-png.flaticon.com/128/1828/1828970.png')`}}></button>
            <button className='star_btn2' onClick={()=>setStar2(!star2)}
            style={{backgroundImage:star2?`url('https://cdn-icons-png.flaticon.com/128/477/477406.png')`:`url('https://cdn-icons-png.flaticon.com/128/1828/1828970.png')`}}></button>
            <button className='star_btn3' onClick={()=>setStar3(!star3)}
            style={{backgroundImage:star3?`url('https://cdn-icons-png.flaticon.com/128/477/477406.png')`:`url('https://cdn-icons-png.flaticon.com/128/1828/1828970.png')`}}></button>
            <button className='star_btn4' onClick={()=>setStar4(!star4)}
            style={{backgroundImage:star4?`url('https://cdn-icons-png.flaticon.com/128/477/477406.png')`:`url('https://cdn-icons-png.flaticon.com/128/1828/1828970.png')`}}></button>
            <button className='star_btn5' onClick={()=>setStar5(!star5)}
            style={{backgroundImage:star5?`url('https://cdn-icons-png.flaticon.com/128/477/477406.png')`:`url('https://cdn-icons-png.flaticon.com/128/1828/1828970.png')`}}></button>
        </div>
    )
}

export default Choose_star;