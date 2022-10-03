import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai";
import {postSinglePost} from "./helpers/helpers";


function PostCreation() {
    const navigate = useNavigate();
    const [form, setForm] = useState({});


    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }


    const publish = (e) => {
        e.preventDefault();
        postSinglePost(0, form.content, navigate);
    };


    function close() {
        return navigate("/");
    }


    return (<>
            <form>
                <button onClick={close}><AiOutlineClose/></button>
                <div>
                    <textarea id="content" name="content" value={form.content} onChange={handleFormChange}></textarea>
                </div>
                <button type="submit" onClick={publish}>Опубликовать</button>
            </form>
    </>);
}


export {PostCreation};