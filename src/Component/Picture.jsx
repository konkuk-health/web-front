import React, { useEffect, useState } from 'react';

import data from '../data/post.json'

function Picture(props){
    const [img,setImg] = useState(props.picture); // 여기에는 사진들을 미리 state에 넣어둘거임
    const [idx,setIdx] = useState(0);
    const clickEvent = (event) =>{
        if(idx+Number(event.target.value) >= props.picture.length){
            setIdx(idx);
        }
        else if(idx+Number(event.target.value) < 0){
            setIdx(idx);
        }
        else{
            setIdx(idx+Number(event.target.value));
        }

    }
      return(
        <div>
            <article style={{position:'relative'}}>
                <aside>
                    <button value = '-1' onClick = {clickEvent} style={{position:'absolute', display:'inline-block',top:'45%',opacity:'0.5'}}>이전</button>
                </aside>
                <img src={img[idx]} style={{width: "300px",height:"200px"}}></img>
                <aside>
                    <button value='1' onClick = {clickEvent} style={{position:'absolute', display:'inline-block',top:'45%',right:'0%',opacity:'0.5'}}>다음</button>
                </aside>
            </article>
        </div>
      )
}

export default Picture;