import { Route, Routes,Link } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Post from './Page/Post';
import CreatePost from './Page/CreatePost';
import './App.css';

function App() {
  return (
    <div style ={{display:"flex",height: "100%"}}>
        <aside style = {{width: "10%",float:"left",border: "1px solid",opacity: "0.7",color:"black",height: "100%",position:"fixed"}}>
            <div style={{textAlign:"center",fontSize:"20px"}}>
                <div className="tag">health</div>
                <div className="tag"><Link to='/' style={{ color: 'black' }}>홈</Link></div>
                <div className="tag"><Link to='/about' style={{ color: 'black' }}>헬스장 검색</Link></div>
                <div className="tag">메시지</div>
                <div className="tag"><Link to='/img' style={{ color: 'black' }}>스크랩</Link></div>
                <div className="tag"><Link to='/createPost' style={{ color: 'black' }}>글작성</Link></div>
            </div>
        </aside>
        <div style={{display:"flex",paddingLeft:"20%",height: "100%",width:"100%"}}>
            <div style={{margin:"10px 180px"}}>
                <Routes>
                    <Route path="/" element={<Post/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/img" element={<Post/>}></Route>
                    <Route path="/createPost" element={<CreatePost/>}/>
                </Routes>
            </div>
        </div>
    </div>
  );
}

export default App;
