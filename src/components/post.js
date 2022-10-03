import {useNavigate} from "react-router-dom";


function Post({postInfo}) {
    const navigate = useNavigate();

    const showCard = (e) => {
        return navigate(`/posts/${postInfo.id}`)
    }

    let date = getFormattedDate(postInfo.created);

    return (<>
        <div onClick={showCard} className="post-card">
            <span>Id: {postInfo.id}</span><br/>
            <span>Content:</span><br/>
            <textarea readOnly value={postInfo.content}></textarea> <br/>
            <span>Created: {date}</span><br/>
        </div>
    </>);
}


function getFormattedDate(createdDate) {
    let date = new Date(createdDate);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}


export {Post};