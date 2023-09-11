import React from 'react';
import Picture from '../Component/Picture';
import Comment from '../Component/Comment';
import data from '../data/post.json'
// props로 정보들을 받아와서 돌리자. 즉 map으로 돌릴때 넘겨줘야할거 같음
function Post(){
    const list = data.map((el)=>(
        <div style={{width: "100%",heigh:"100%",overflow:"auto",margin:"0 auto"}}>
            <div>
                <div>{el.nickName}</div> 
                <Picture picture={el.picture}/>
                <Comment Comment={el.Comment}/>
                <hr/>
            </div>
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