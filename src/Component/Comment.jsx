import React from 'react';

// click 이벤트 발생시 팝업 열기 기능 추가해야함
function Comment(props){
    return(
        <div style={{display:"flex"}}>
            <div>{props.Comment.user1.nickName}: </div>
            <div>{props.Comment.user1.Comment}</div>
        </div>
    )
}

export default Comment;