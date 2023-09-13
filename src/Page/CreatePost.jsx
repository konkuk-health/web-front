import React from 'react'
import PostCreatingBox from '../Component/PostCreatingBox';

function CreatePost(){
    return(
        <>
            <div>제목?</div>
            <div>파일 업로드</div>
            <PostCreatingBox></PostCreatingBox>
            <div>운동 종목 작성(버튼 눌렀을때 칸이 하나씩 추가되게?)</div> 
            <div>태그</div>
        </>
    )
}

export default CreatePost;