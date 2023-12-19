const click=document.querySelector(".click")
click.addEventListener("click",function(){
    click.classList.add('moves')
setTimeout(function(){
    click.classList.remove('moves');
},100)
})
//i did wanted to  dry but im still bad .message  .notifications .profile .creatStoryClick
const message=document.querySelector(".message")
message.addEventListener("click",function(){
    message.classList.add('moves')
setTimeout(function(){
    message.classList.remove('moves');
},100)
})
const notifications=document.querySelector(".notifications")
notifications.addEventListener("click",function(){
    notifications.classList.add('moves')
setTimeout(function(){
    notifications.classList.remove('moves');
},100)
})
const profile=document.querySelector(".profile")
profile.addEventListener("click",function(){
    profile.classList.add('moves')
setTimeout(function(){
    profile.classList.remove('moves');
},100)
})
