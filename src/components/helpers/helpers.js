
export const getSinglePost = (postId, dataSetter) => {
    fetch('http://localhost:7777/posts')
    .then((response) => {
        return response.json();
    })
    .catch(() => {
        console.error("Can not dowload data");
    })
    .then((data) => {
        let post = data.find(x => x.id == postId);
        dataSetter(post);
    });
}


export const passSinglePost = (postId, content, navigate) => {
    fetch('http://localhost:7777/posts', 
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": postId,
            "content": content
        })
    })
    .then(() =>{
        return navigate("/");
    });
}