import '../../assets/styles/css/admin/notice_write.css'

const Notice_write: React.FC = () => {
    return (
        <div className='notice_write'>
            <strong>
                공지사항
            </strong>
            <div className='notice_write_title'>
                <div className='write_tit'>
                    <span>글쓰기</span>
                </div>
                <div className='tit'>
                    <strong>제목</strong>
                    <input type='text' placeholder='제목을 입력해주세요' />
                </div>
            </div>
            <div className='body_text_area'>
                <textarea placeholder='영문금지 한글만입력하시오'></textarea>
            </div>
            <div className='write_btn'>
                <div className='ok_btn'>
                    <button>등록</button>
                </div>
                <div className='no_btn'>
                    <button>취소</button>
                </div>
            </div>
        </div>
    )
}

export default Notice_write;