import {useNavigate} from "react-router-dom";


function Post({postInfo}) {
    const navigate = useNavigate();


    const showCard = (e) => {
        return navigate(`/posts/${postInfo.id}`)
    }


    return (<>
        <div onClick={showCard} className="post-card">
            <span>Id: {postInfo.id}</span><br/>
            <span>Content:</span><br/>
            <textarea readOnly value={postInfo.content}></textarea> <br/>
            <span>Created: {postInfo.created}</span><br/>
        </div>
    </>);
}


export {Post};