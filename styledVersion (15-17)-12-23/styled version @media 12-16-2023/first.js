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
