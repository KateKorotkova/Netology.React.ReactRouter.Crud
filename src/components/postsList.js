import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Post} from "./post";


function PostsList() {
    const navigate = useNavigate();
    const[posts, setPosts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:7777/posts')
        .then((response) => {
            return response.json();
        })
        .catch(() => {
            console.error("Can not dowload data");
        })
        .then((data) => {
            setPosts(data);
        });
    }, []);


    const addPost = () => {
        return navigate("/posts/new");
    }


    return (<>
                <button onClick={addPost}>Создать пост</button>
                {
                    posts.map((x) => {
                        return <Post key={x.id} postInfo={x}/>;
                    })
                }
        </>);
}


export {PostsList};