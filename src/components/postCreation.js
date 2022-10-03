import {useState} from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai";


function PostCreation() {
    const navigate = useNavigate();
    const [form, setForm] = useState({});


    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }


    const publish = (e) => {
        e.preventDefault();
        console.log('form', form);
        fetch('http://localhost:7777/posts', 
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": 0,
                "content" : form.content
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
                    <textarea id="content" name="content" value={form.content} onChange={handleFormChange}></textarea>
                </div>
                <button type="submit" onClick={publish}>Опубликовать</button>
            </form>
    </>);
}


export {PostCreation};