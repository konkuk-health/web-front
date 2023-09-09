import React from 'react';
import Picture from '../Component/Picture';
import Comment from '../Component/Comment';
import data from '../data/post.json'
// props로 정보들을 받아와서 돌리자. 즉 map으로 돌릴때 넘겨줘야할거 같음
function Post(){
    const list = data.map((el)=>(
        <div style={{padding:"20px 20px"}}>
            <div>{el.nickName}</div> 
            <Picture picture={el.picture}/>
            <Comment Comment={el.Comment}/>
            <hr/>
        </div>
    ));
    return(
        <div>
            {list}
            {console.log(list)}
        </div>
    )
}

export default Post;