import '../../assets/styles/css/editor_write.css'

const Editor_write: React.FC = () => {
    return (
        <div className="editor_write">
            <div className='title'>칼럼이름</div>
            <input placeholder='제목을 입력해 주세요'></input>
            <div className='title'>칼럼부제</div>
            <input type='text' placeholder='내용을 입력해 주세요'></input>
            <div className='add'>
                <div>식당추가</div><button>+</button>
            </div>
            <div className='restaurant_name'>
                <div>식당이름1</div>
                <div>식당이름2</div>
            </div>
            <hr/>
            <div className='button_wrap'>
                <button className='cancel_btn'>취소</button><button className='check_btn'>확인</button>
            </div>
        </div>
    );
}

export default Editor_write;