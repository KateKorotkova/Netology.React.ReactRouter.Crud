import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai";


function PostEdition() {
    const navigate = useNavigate();
    let { postId } = useParams();
    const [post, setPost] = useState({});


    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setPost({...post, [name]: value});
    }


    useEffect(() => {
        fetch('http://localhost:7777/posts')
        .then((response) => {
            return response.json();
        })
        .catch(() => {
            console.error("Can not dowload data");
        })
        .then((data) => {
            let post = data.find(x => x.id == postId);
            setPost(post);
        });
    }, []);


    const save = (e) => {
        e.preventDefault();
        console.log('form', post);
        console.log('postId', postId);
        fetch('http://localhost:7777/posts', 
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": postId,
                "content": post.content
            })
        })
        .then(() =>{
            return navigate("/");
        });
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