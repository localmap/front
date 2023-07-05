import '../../assets/styles/css/choose_food.css'
import {useState } from 'react';
const Choose_food:React.FC = () => {
    const [food1, setFood1] = useState(false);
    const [food2, setFood2] = useState(false);
    const [food3, setFood3] = useState(false);
    const [food4, setFood4] = useState(false);
    const [food5, setFood5] = useState(false);
    const [food6, setFood6] = useState(false);
    const [food7, setFood7] = useState(false);
    const [food8, setFood8] = useState(false);
    return (
        <div className='choose_food'>
            <div className='food'>
                <div className='food_list'>
                            <button className='food1_button' onClick={()=>setFood1(!food1)}
                            style={{backgroundImage:food1?`url('https://cdn-icons-png.flaticon.com/128/3075/3075977.png')` :`url('https://cdn-icons-png.flaticon.com/128/3075/3075935.png')`}}>
                            </button>
                            <button className='food2_button' onClick={()=>setFood2(!food2)}
                            style={{backgroundImage:food2?`url('https://cdn-icons-png.flaticon.com/128/1623/1623786.png')`:`url('https://cdn-icons-png.flaticon.com/128/1623/1623712.png')`}}>
                            </button>
                            <button className='food3_button' onClick={()=>setFood3(!food3)} 
                            style={{backgroundImage:food3?`url('https://cdn-icons-png.flaticon.com/128/2515/2515183.png')`:`url('https://cdn-icons-png.flaticon.com/128/2515/2515150.png')`}}>
                            </button>
                            <button className='food4_button' onClick={()=>setFood4(!food4)}
                            style={{backgroundImage:food4?`url('https://cdn-icons-png.flaticon.com/128/3823/3823096.png')`:`url('https://cdn-icons-png.flaticon.com/128/3823/3823071.png')`}}></button>
                </div>
                <div className='food_list2'>
                        <button className='food5_button' onClick={()=>setFood5(!food5)}
                        style={{backgroundImage:food5?`url('https://cdn-icons-png.flaticon.com/128/2617/2617047.png')`:`url('https://cdn-icons-png.flaticon.com/128/2616/2616925.png')`}}></button>
                        <button className='food6_button' onClick={()=>setFood6(!food6)}
                        style={{backgroundImage:food6?`url('https://cdn-icons-png.flaticon.com/128/3280/3280126.png')`:`url('https://cdn-icons-png.flaticon.com/128/3280/3280002.png')`}}></button>
                        <button className='food7_button' onClick={()=>setFood7(!food7)}
                        style={{backgroundImage:food7?`url('https://cdn-icons-png.flaticon.com/128/1046/1046751.png')`:`url('https://cdn-icons-png.flaticon.com/128/1046/1046853.png')`}}></button>
                        <button className='food8_button' onClick={()=>setFood8(!food8)}
                        style={{backgroundImage:food8?`url('https://cdn-icons-png.flaticon.com/128/7451/7451039.png')`:`url('https://cdn-icons-png.flaticon.com/128/7451/7451128.png')`}}></button>
                </div>
            </div>
        </div>
    );
}

export default Choose_food;