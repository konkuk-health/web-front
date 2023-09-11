import { Route, Routes,Link } from 'react-router-dom';
import styled from 'styled-components'
import SideBar from './Component/SideBar';
import About from './Page/About';
import Post from './Page/Post';
import CreatePost from './Page/CreatePost';
import './App.css';

function App() {

  return (
    <div style ={{display:"flex",height: "100%"}}>
    {/* 이 SideBar를 component로 나누고 react response 사용(useMediaQuery) */}
        <SideBar/>
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
