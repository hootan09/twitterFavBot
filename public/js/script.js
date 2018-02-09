//var socket = io.connect({path:'/x/socket.io'});
var socket = io.connect('/');
socket.on("connect" , ()=>{
    console.log('coonected to server');
});
socket.on("disconnect" , () =>{
    console.log('disconnected from server');
});
socket.on('message' , (data) =>{
    console.log(data); 
    $("#serverIncome").append(`new Fav:<br><img src="${data.user.profile_image_url}"></img><br>[${data.user.name}] said: <br> <hr>${data.text} <br><br>`);
    window.scrollBy(0,screen.height); 
});

