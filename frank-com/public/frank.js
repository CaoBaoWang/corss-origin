

// const request = new XMLHttpRequest()
//
// request.open('GET','http://qq.com:8888/friends.json')
//
// request.onreadystatechange = ()=>{
//     if(request.readyState === XMLHttpRequest.DONE){
//         if(request.status >= 200 && request.status < 300) {
//             const json  = request.response
//             console.log(json);
//         }
//     }
// }
// request.send()



// JSONP请求数据

const random = 'frankJSONPCallbackName' + Math.random()
window[random]= (data)=>{
    console.log(data);
}

const script  = document.createElement('script');
script.src = `http://qq.com:8888/friends.js?callback=${random}`
document.body.appendChild(script)

