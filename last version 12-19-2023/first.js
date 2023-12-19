console.log('<img height="30px" src="pics/commentpic.jpg" alt=""></img>')
const dataBase=[
    {
        username:"brahim",
        profilePicture:"profiles/0/profile picture/profilePictures.jpg",
        post1:{
            textContent:"• أكد مدرب بولونيا الإيطالي عودة العزوزي لصفوف الفريق لمواجهة روما في إطار مباريات الدوري الإيطالي. 🤩",
            commentText:"🙂 بديل المرابط ان شاءالله",
            imageContent:"profiles/0/imgContent/imageContent.jpg",
            imgComment:"profiles/0/profile picture/profilePictures.jpg",
        }
    },
    {
        username:"jeff",
        profilePicture:"profiles/1/profile picture/profilePictures.jpg",
        post1:{
            textContent:"• أكد مدرب بولونيا الإيطالي عودة العزوزي لصفوف الفريق لمواجهة روما في إطار مباريات الدوري الإيطالي. 🤩",
            commentText:"🙂 بديل المرابط ان شاءالله",
            imageContent:"profiles/1/imgContent/imageContent.jpg",
            imgComment:"profiles/1/profile picture/profilePictures.jpg",
        }
    },
    {
        username:"alex",
        profilePicture:"profiles/2/profile picture/profilePictures.jpg",
        post1:{
            textContent:"• أكد مدرب بولونيا الإيطالي عودة العزوزي لصفوف الفريق لمواجهة روما في إطار مباريات الدوري الإيطالي. 🤩",
            commentText:"🙂 بديل المرابط ان شاءالله",
            imageContent:"profiles/2/imgContent/imageContent.jpg",
            imgComment:"profiles/2/profile picture/profilePictures.jpg",
        }
    },
    {
        username:"jason",
        profilePicture:"profiles/3/profile picture/profilePictures.jpg",
        post1:{
            textContent:"• أكد مدرب بولونيا الإيطالي عودة العزوزي لصفوف الفريق لمواجهة روما في إطار مباريات الدوري الإيطالي. 🤩",
            commentText:"🙂 بديل المرابط ان شاءالله",
            imageContent:"profiles/3/imgContent/imageContent.jpg",
            imgComment:"profiles/3/profile picture/profilePictures.jpg",
        }
    }
]
const post=document.querySelector(".post")
for (let i = 0 ; i<dataBase.length; i++){
    post.innerHTML+=`
                <div class="postOne">
                    <!--groupe name and pic profile name and pic and the sittingS-------------------------------------------------------------------------------------->
                    <footer class="post__footer">
                        <div>
                            <div class="Post__profile">
                                <div class="postprofile profile click">
                                <img class="profileUserName" height="30px" src="${dataBase[i].profilePicture}" alt=""></div>
                            </div>
                            <div class="profileNameGroupe">
                                <div class="groupPic profile click"></div>
                                <p class="groupeName">${"brahimBack"}</p>
                            </div>
                            <div class="profileName">
                                <div class="name">${dataBase[i].username}</div>
                                <div class="time">${"10:15 16 Dec 2023"}</div>
                                <div class="GoupeOrPersonal">0</div>
                            </div>
                            <!--POST creator INFORMATION ------------------------------------------------------------------------------------->
                        </div>
                        <!--post sittings-------------------------------------------------------------------------------------->
                        <div class="postSittings">
                            <div class="dots">
                                <svg class="dotsSvg"  height="10px" width="30px">
                                    <circle class="theDotsSvg theDotsSvg1" cx="5" cy="5" r="3" fill="#0000003d"></circle>
                                    <circle class="theDotsSvg theDotsSvg2" cx="15" cy="5" r="3" fill="#0000003d"></circle>
                                    <circle class="theDotsSvg theDotsSvg3" cx="25" cy="5" r="3" fill="#0000003d"></circle>
                                </svg>
                            </div>
                            <div class="remove">X</div>
                        </div>
                    </footer>
                    <!--post text and picture-------------------------------------------------------------------------------------->
                    <main class="postContent">
                        <div class="textContent">${dataBase[i].post1.textContent}</div>
                        <div class="imageContent">
                            <img width="100%" src="${dataBase[i].post1.imageContent}" alt="">
                        </div>
                    </main>
                    <!--likes and comments counts-------------------------------------------------------------------------------------->
                    <div class="reactionCount">
                        <div class="likesCount"><img class="likesCountIcon" src="pics/love.png" height="20px" alt="">{edit this on js}</div>
                        <div class="commentsCount">{edit here on js}<img class="commentsCountIcon" src="pics/comment.png" height="20px" alt=""></div>
                    </div>
                    <!--likes and comments click or buttons -------------------------------------------------------------------------------------->
                    <div class="reactionDo">
                        <div class="likes">
                            <div class="likePart"><img class="likePartIcon"  src="pics/like.png" alt="" width="20px"></div>
                            <div class="likePart"><p class="textLikePart">Like</p></div>
                        </div>
                        <div class="comment">  
                            <div class="likePart"><img class="likePartIcon"  src="pics/comment.png" width="20px"></div>
                            <div class="likePart"><p class="textLikePart">comment</p></div>
                        </div>
                        <div class="share">  
                            <div class="likePart"><img class="likePartIcon"  src="pics/share.webp" alt=""width="20px"></div>
                            <div class="likePart"><p class="textLikePart">share</p></div>
                        </div>
                    </div>
                    <div class="commentSection">
                        <p class="viewMore">View more comments</p>
                        <div class="commentContainer">
                            <div class="profile commentProfile click">
                            </div>
                            <div class="realComment">
                                <div class="commentTextSection">
                                    <div class="name commentname">${dataBase[i].username}</div>
                                    <div class="commentText">${dataBase[i].post1.commentText}</div>
                                </div>
                                <img class="imgComment" src="${dataBase[i].post1.imgComment}" width="50%" alt="">
                                <div class="likesDateReplay">
                                    <div class="commentDate">15min</div>
                                    <div class="commentLike">
                                        Like
                                    </div>
                                    <div class="commentReplay">replay</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="writeComment">
                        <div class="profile click"></div>
                        <div class="commentInput">
                            <input placeholder="write a comment . . ."  class="commentInputwrite" type="text">
                            <div class="iconsForComments">
                                
                                <img  height="40px" width="40px" src="pics/avatar.png" class="avatarIcon" alt="">
                                <img    width="40px" src="pics/" alt="">
                                <img  height="40px" width="40px" src="pics/feelings.png" class="HappyIcon" alt="">
                                <img height="40px" width="40px" src="pics/camera.png" class="HappyIcon"  alt="">
                                <img class="HappyIcon"  width="40px"  height="40px" src="pics/gif.png" alt="">
                                <img class="HappyIcon inxo"  width="35px" 
                                height="35px" src="pics/sticker.png" alt="">
                            
                            
                            </div>
                        </div>
                    </div>
                </div>
                `
}
//-------------------------------------------------------------------------------------------------------------
const body=document.querySelector("body")
body.innerHTML+=`
<div class="clickNav">
<div class="messageContainer">
    <div class="navChats">
        <div class="chats">chats</div>
        <div class="messageNavSitings">
            <div class="dot">
            <svg class="dotsSvg"  height="10px" width="30px">
            <circle class="theDotsSvg theDotsSvg1" cx="5" cy="5" r="3" fill="#000"></circle>
            <circle class="theDotsSvg theDotsSvg2" cx="15" cy="5" r="3" fill="#000"></circle>
            <circle class="theDotsSvg theDotsSvg3" cx="25" cy="5" r="3" fill="#000"></circle>
            </svg>
            </div>
            <div class="expand">
            <img src="z-picstest/expand.png" height="25px" alt="">
        </div>
        <div class="writeNav">
            <img src="z-picstest/new message.jpg" height="25px" alt="">
        </div>
        </div>
    </div>
    <div class="searchMessage">
        <div class="searchIcon1">
            <img class="imgSearchIcon" src="z-picstest/search-icon-png-21.png" alt="">
        </div>
        <input class="messageInput" type="text">
    </div>
    <div class="convertationContainer">
        <div class="messageOne">
            <div class="profileMessage"></div>
            <div class="nameMsg">kosay</div>
            <div class="lastText">hi there im using facebook
                <div class="time">6w</div>
            </div>
            
        </div>
        <div class="messageOne">
            <div class="profileMessage"></div>
            <div class="nameMsg">gabrialy</div>
            <div class="lastText">hi there im using facebook
                <div class="time">6w</div>
            </div>
            
        </div>
    </div>
</div>
</div>
<div class="messageSent">
<div class="messageSentNav">
    <div class="firstNav">
        <div class="profileMessage insideTheContainer"></div>
        <div class="name  centerName">kosay</div>
        <div class="arrowDown">></div>
    </div>
    <div class="messageSentNavSittings">
        <div class="callVoice"><img src="z-picstest/call.png" alt=""  height="18px"></div>
        <div class="callVedio"><img src="z-picstest/vedio call.png" alt="" height="20px"></div>
        <div class="minimise"><img src="z-picstest/minimize.png" alt=""  height="20px"></div>
        <div class="close"><img src="z-picstest/close.png" alt=""  height="20px"></div>
    </div>
</div>
<div class="messageMainContent">
    <div class="aboveTheMessage">
        <div class="profileMessage insideTheMainContentMessage"></div>
        <div class="name INSIDETHEMESSAGE">kosay</div>
    </div>
    
    <div class="messageSentedNow">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis optio quod iure nemo modi voluptatibus, sequi minus nam omnis quos. Officiis soluta possimus veritatis inventore molestiae neque quibusdam quis optio.
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptatem a dolorem molestiae earum maxime doloribus fugit dolore laboriosam suscipit quis minima laborum, magnam vel consequuntur unde, eveniet cumque et.
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique error quo esse nesciunt perspiciatis illum deleniti facilis sequi cum magni distinctio eum ducimus sed repudiandae, autem ab nostrum laborum hic.
    </div>
    <div class="messageSentedNow">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum voluptatum deserunt minus deleniti dolores porro asperiores dolor voluptates corrupti unde, tempora a atque modi excepturi rem fugit vitae! Sunt, voluptatem?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate saepe veritatis incidunt. Deleniti eligendi modi reprehenderit quidem, doloribus amet in ratione alias quasi quas asperiores, molestias repudiandae quo debitis quam.</div>
    <div class="messageSentedNow">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit illo repudiandae quisquam reprehenderit quasi, eaque, maiores nesciunt rerum perspiciatis tenetur eos sit tempore nostrum blanditiis consectetur. Placeat, voluptatibus deserunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolor architecto perferendis. Sed eos qui rem pariatur eligendi, labore doloremque possimus aliquid iste alias placeat suscipit esse animi, tenetur earum.
    </div>
</div>
<div class="sentSomething">
    <div class="sentFile">
        <div class="moreActions">+</div>
        <div class="morePictures">
            <img height="20px" src="pics/pic-vedio.png" alt="">
        </div>
        <div class="moreStickers"><img height="15px" src="pics/sticker.png" alt=""></div>
        <div class="moreGifs">
            <img height="20px" src="pics/gif.png" alt="">
        </div>
    </div>
    <div class="sentText">
        <input class="sentTextInput" type="text" placeholder="Aa">
        <img class="sentTextImo" src="pics/feelings.png" height="20px" alt="">
    </div>
    <div class="sentTextLike">
        <img height="18px" src="pics/like.png" alt="">
    </div>
</div>
</div>
<div class="clickNav1">
<div class="messageContainer">
    <div class="navChats">
        <div class="chats">create</div>
    </div>
    <div class="convertationContainer">
        <div class="messageOne">
            <div class="profileMessage"></div>
            <div class="name CreateName">Post</div>
            <div class="lastText">Share a post on News Feed.
            </div>
            
        </div>
        <div class="messageOne">
            <div class="profileMessage"></div>
            <div class="name CreateName">Story</div>
            <div class="lastText">Share a photo or write something.
            </div>
            
        </div>
        <div class="messageOne">
            <div class="profileMessage"></div>
            <div class="name CreateName">Reel</div>
            <div class="lastText">Share a reel.
            </div>
            
        </div>
        <div class="messageOne">
            <div class="profileMessage"></div>
            <div class="name CreateName">Live Event</div>
            <div class="lastText">Add a life event to your profile.
            </div>
        </div>
        <div class="messageOne">
            <div class="profileMessage"></div>
            <div class="name CreateName">Page</div>
            <div class="lastText">Connect and share with customers of fans.
            </div>
        </div>
        <div class="messageOne">
            <div class="profileMessage"></div>
            <div class="name CreateName">Ad</div>
            <div class="lastText">adverstse your busniess, brand or organisation.
            </div>
        </div>
    </div>
</div>
</div>

<div class="ClickNav2">
        <div class="messageContainer  notificationsContainer">
            <div class="navChats">
                <div class="chats">Notifications</div>
                <div class="navChats">
                    <div class="messageNavSitings">
                        <div class="dot">
                        <svg class="dotsSvg"  height="10px" width="30px">
                        <circle class="theDotsSvg theDotsSvg1" cx="5" cy="5" r="3" fill="#000"></circle>
                        <circle class="theDotsSvg theDotsSvg2" cx="15" cy="5" r="3" fill="#000"></circle>
                        <circle class="theDotsSvg theDotsSvg3" cx="25" cy="5" r="3" fill="#000"></circle>
                        </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="allAndUnread">
                <div class="allNotifications">All</div>
            <div class="unreadNotifications">Unread</div>
            </div>
            
            <div class="convertationContainer">
                <div class="messageOne">
                    <div class="profileMessage"></div>
                    <div class="name CreateName">kosay</div>
                    <div class="lastText">hi there im using facebook
                </div>
                    
                </div>
                <div class="messageOne">
                    <div class="profileMessage"></div>
                    <div class="name CreateName">kosay</div>
                    <div class="lastText">hi there im using facebook
                    </div>
                </div>
                <div class="messageOne">
                    <div class="profileMessage"></div>
                    <div class="name CreateName">kosay</div>
                    <div class="lastText">hi there im using facebook</div>
                </div>
                <div class="messageOne">
                    <div class="profileMessage"></div>
                    <div class="name CreateName">kosay</div>
                    <div class="lastText">hi there im using facebook</div>
                </div>
                <div class="messageOne">
                    <div class="profileMessage"></div>
                    <div class="name CreateName">kosay</div>
                    <div class="lastText">hi there im using facebook</div>
                </div>
                <div class="messageOne">
                    <div class="profileMessage"></div>
                    <div class="name CreateName">kosay</div>
                    <div class="lastText">hi there im using facebook</div>
                </div>
                <div class="messageOne">
                    <div class="profileMessage"></div>
                    <div class="name CreateName">kosay</div>
                    <div class="lastText">hi there im using facebook</div>
                </div>
            </div>
        </div>
    </div>
    
`
const newIcon=document.querySelector(".newIcon")

const iconsForComments=document.querySelector(".iconsForComments")
const commentInputwrite=document.querySelector(".commentInputwrite")
commentInputwrite.addEventListener("input",function(){
    newIcon.innerHTML=`
    <img class="sentIconInput"  width="20px" 
                        height="20px" src="z-picstest/sent.png" alt="">`
    commentInputwrite.style.paddingBottom="3.2rem"
    iconsForComments.style.marginTop="2.5rem"
});
const commentSection=document.querySelector(".commentSection")
const textCommentsCount=document.querySelector(".textCommentsCount")
let commentCounting=0;
newIcon.addEventListener("click",function(){
    let textValue=commentInputwrite.value
    if (textValue!=""){

        commentSection.innerHTML+=` <div class="commentContainer">
    <div class="profile commentProfile click">
    </div>
    <div class="realComment">
        <div class="commentTextSection">
            <div class="name commentname">{username}</div>
            <div class="commentText">${textValue}</div>
        </div>
        <div class="likesDateReplay">
            <div class="commentDate">15min</div>
            <div class="commentLike">
                Like
            </div>
            <div class="commentReplay">replay</div>
        </div>
    </div>
</div>`
commentInputwrite.value=""
commentCounting++

textCommentsCount.textContent=commentCounting

textCommentsCount.classList.add('commentsMove')
    setTimeout(function(){
        textCommentsCount.classList.remove('commentsMove')
    },100)
    }
    
})

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
const ClickNav2=document.querySelector(".ClickNav2")
notifications.addEventListener("click",function(){
    notifications.classList.add('moves')
    if (ClickNav2.style.display === "none") {
        ClickNav2.style.display = "block"
    } else {
        ClickNav2.style.display = "none"
    }
    
     click.classList.remove('move')
     if(ClickNav2.style.display === "block"){
            notifications.style.background="radial-gradient(circle,  #fff ,rgb(8 102 255 / 39%))"
        }else{
            notifications.style.background="rgba(0, 0, 0, 0.133)"
        }
setTimeout(function(){
    notifications.classList.remove('moves');
},100)
clickNav.style.display="none"
navClick1.style.display="none"
click.style.background="rgba(0, 0, 0, 0.133)"
message.style.background="rgba(0, 0, 0, 0.133)"

})
const profile=document.querySelector(".profile")
profile.addEventListener("click",function(){
    profile.classList.add('moves')
setTimeout(function(){
    profile.classList.remove('moves');
},100)
})
const clickNav=document.querySelector(".clickNav")
message.addEventListener("click",function(){
    if (clickNav.style.display === "none") {
        clickNav.style.display = "block"
    } else {
        clickNav.style.display = "none"
    }
    
     click.classList.remove('move')
     if(clickNav.style.display === "block"){
            message.style.background="radial-gradient(circle,  #fff ,rgb(8 102 255 / 39%))"
        }else{
            message.style.background="rgba(0, 0, 0, 0.133)"
        }
navClick1.style.display="none"
ClickNav2.style.display="none"
click.style.background="rgba(0, 0, 0, 0.133)"
notifications.style.background="rgba(0, 0, 0, 0.133)"
});
const navClick1=document.querySelector(".clickNav1")
click.addEventListener("click",function(){
    if (navClick1.style.display === "none") {
        navClick1.style.display = "block"
    } else {
        navClick1.style.display = "none"
    }
    
     click.classList.remove('move')
     if(navClick1.style.display === "block"){
            click.style.background="radial-gradient(circle,  #fff ,rgb(8 102 255 / 39%))"
        }else{
            click.style.background="rgba(0, 0, 0, 0.133)"
        }
 
clickNav.style.display="none"
ClickNav2.style.display="none"
message.style.background="rgba(0, 0, 0, 0.133)"
notifications.style.background="rgba(0, 0, 0, 0.133)"
    } );
const messageOne=document.querySelector(".messageOne")
const messageSent=document.querySelector(".messageSent")
const close=document.querySelector(".close")
close.addEventListener("click",function(){
    messageSent.style.display="none"
})
messageOne.addEventListener("click",function(){
    if (messageSent.style.display==="none"){
        messageSent.style.display="block"
        clickNav.style.display = "none"
    }else{
        messageSent.style.display="block"
        clickNav.style.display = "none"
    }
    message.style.background="rgba(0, 0, 0, 0.133)"
});
const sentTextLike = document.querySelector(".sentTextLike");
const messageMainContent = document.querySelector(".messageMainContent");
const sentTextInput = document.querySelector(".sentTextInput");
sentTextLike.addEventListener("click", function() {
    const textValue = sentTextInput.value;
    if (textValue!=""){
    console.log(textValue);
    messageMainContent.innerHTML += `
        <div class="messageSentedNow">${textValue}</div>`;
        sentTextInput.value=""
    }
});
sentTextInput.addEventListener("input",function(){
    const sentFile=document.querySelector(".sentFile")
    const sentTextImo=document.querySelector(".sentTextImo")
    if (sentTextInput.value!=""){
    sentFile.style.display="none"
    sentTextInput.style.width="250px"
    sentTextLike.innerHTML=`
    <img height="18px" src="z-picstest/sent.png" alt="">`
}else{
    sentFile.style.display="flex"
    sentTextInput.style.width="120px"
    sentFile.style.transition="none"
    sentTextLike.innerHTML=`
    <img height="18px" src="pics/like.png" alt="">`
}
})
const textLike=document.querySelector(".textLike")
const likes=document.querySelector(".likes")
let likesValue;
likes.addEventListener("click",function(){
    if (likesValue!=0){
        likesValue=0
    }else{
        likesValue=1
    }
    textLike.textContent=likesValue
    textLike.classList.add('likeMoves')
    setTimeout(function(){
        textLike.classList.remove('likeMoves')
    },100)
})
