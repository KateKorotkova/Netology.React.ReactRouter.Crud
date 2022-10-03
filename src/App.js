import logo from './logo.svg';
import './App.css';
import {Routes, Route, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {PostsList} from "./components/postsList";
import {PostCreation} from "./components/postCreation";
import {PostView} from "./components/postView";
import {PostEdition} from "./components/postEdition";


function App() {
  const navigate = useNavigate();


  useEffect(() => {
    return navigate("/");
  }, [])


  return (<>
            <Routes>
              <Route path="/" element={<PostsList/>} />
              <Route path="/posts/new" element={<PostCreation/>} />
              <Route path="/posts/:postId" element={<PostView/>} />
              <Route path="/posts/edition/:postId" element={<PostEdition/>} />
            </Routes>          
        </>);
}

export default App;
