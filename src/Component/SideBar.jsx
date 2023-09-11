import React from "react";
import { Link } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import './SideBar.css';

function SideBar(){
    const isBigScreen = useMediaQuery({query:'(min-width: 1000px)'});
    return(
        <div className={isBigScreen ? "sidebarTwo" : "sidebar"}>
            <div className={isBigScreen ? "tag-containerTwo" : "tag-container"}>
                <div className="tag">health</div>
                <div className="tag"><Link to='/'>홈</Link></div>
                <div className="tag"><Link to='/about'>헬스장 검색</Link></div>
                <div className="tag">메시지</div>
                <div className="tag"><Link to='/img'>스크랩</Link></div>
                <div className="tag"><Link to='/createPost'>글작성</Link></div>
            </div>
        </div>
    )
}

export default SideBar;