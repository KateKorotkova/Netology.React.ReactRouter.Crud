import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getSinglePost} from "./helpers/helpers";


function PostView() {
    const navigate = useNavigate();
    let { postId } = useParams();
    const [post, setPost] = useState({});


    useEffect(() => {
        getSinglePost(postId, setPost);
    }, []);


    const edit = (e) => {
        return navigate(`/posts/edition/${postId}`);
    };


    function remove() {
        fetch(`http://localhost:7777/posts/${postId}`, {
            method: 'DELETE',
        })
        .then(() =>{
            return navigate("/");
        });
    }


    return (<>
                <div>
                    <textarea readOnly value={post.content}></textarea>
                </div>
                <button type="submit" onClick={edit}>Изменить</button>
                <button type="submit" onClick={remove}>Удалить</button>
        </>);
}


export {PostView};