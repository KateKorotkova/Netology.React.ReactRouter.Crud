import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai";
import {getSinglePost, passSinglePost} from "./helpers/helpers";


function PostEdition() {
    const navigate = useNavigate();
    let { postId } = useParams();
    const [post, setPost] = useState({});


    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setPost({...post, [name]: value});
    }


    useEffect(() => {
        getSinglePost(postId, setPost);
    }, []);


    const save = (e) => {
        e.preventDefault();
        passSinglePost(0, post.content, navigate);
    };


    function close() {
        return navigate("/");
    }


    return (<>
            <form>
                <button onClick={close}><AiOutlineClose/></button>
                <div>
                    <textarea id="content" name="content" value={post.content} onChange={handleFormChange}></textarea>
                </div>
                <button type="submit" onClick={save}>Сохранить</button>
            </form>
    </>);
}


export {PostEdition};