import { Route, Routes,Link } from 'react-router-dom';
import styled from 'styled-components'
import SideBar from './Component/SideBar';
import About from './Page/About';
import Post from './Page/Post';
import CreatePost from './Page/CreatePost';
import './App.css';

function App() {
    const ContentContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
    padding: 50px 200px;
`   ;
  return (
    <div style ={{display:"flex",height: "100%"}}>
    {/* 이 SideBar를 component로 나누고 react response 사용(useMediaQuery) */}
        <SideBar/>
        <ContentContainer>
            <div style={{padding:"10px 200px",margin:"0 auto"}}>
                <Routes>
                    <Route path="/" element={<Post/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/img" element={<Post/>}></Route>
                    <Route path="/createPost" element={<CreatePost/>}/>
                </Routes>
            </div>
        </ContentContainer>
    </div>
  );
}

export default App;
