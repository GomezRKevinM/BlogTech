

export async function getCategorias(){
    const request = await fetch('https://app-07f9025b-6a13-4685-a1e7-d30222c7d740.cleverapps.io/foro/categorias')
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(error => console.error(error));
    return request;
}

export async function getPosts(categoria){
    let request;
    switch (categoria) {
        case "Todas":
             request = await fetch('https://app-07f9025b-6a13-4685-a1e7-d30222c7d740.cleverapps.io/foro/publicaciones')
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => console.error(error));
            return request;
            break;
        default:
             request = await fetch('https://app-07f9025b-6a13-4685-a1e7-d30222c7d740.cleverapps.io/foro/publicaciones/' + categoria)
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => console.error(error));
            return request;
            break;
    }

}

export async function getLikesPost(idPost){
    const request = await fetch('https://app-07f9025b-6a13-4685-a1e7-d30222c7d740.cleverapps.io/foro/post/' + idPost + '/likes')
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(error => console.error(error));
    return request;
}
// const username = localStorage.getItem('username');
export async function getLikesUSer(username){
    const request = await fetch('https://app-07f9025b-6a13-4685-a1e7-d30222c7d740.cleverapps.io/foro/userLikes')
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(error => console.error(error));
    return request;
}

console.log(getLikesUSer("KevinGr"))