const cache = {};

export const Request = (url,method = {method : "GET"}) => {
    if(cache[url]) return cache[url];
    return fetch(url,method).
    then(res => {
        if(!res.ok) throw new Error('서버에러')
        return res.json()
    }).then(res => {
        cache[url] = res;
        return res;
    })
    .catch(e => 
        console.log(e)
    )
}

