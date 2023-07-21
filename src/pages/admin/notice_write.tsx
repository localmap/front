import '../../assets/styles/css/notice_write.css';

const Notice_Write: React.FC = () => {
    return(
        <div className="notice_write">
            <div className='notice_write_title'>공지사항 제목</div>
            <input type='text' className='column_title' placeholder='제목을 입력해 주세요'></input>
            <textarea></textarea>
            <hr/>
            <div className='button_wrap'>
                <button className='cancel_btn'>취소</button><button className='check_btn'>등록</button>
            </div>
        </div>
    );
}

export default Notice_Write;