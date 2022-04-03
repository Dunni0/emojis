const closedFaceEmoji = document.querySelector(".closed");
const openFaceEmoji = document.querySelector(".open");

closedFaceEmoji.addEventListener("click",function(){
    if (openFaceEmoji.classList.contains("open")){
        openFaceEmoji.classList.add("active");
        closedFaceEmoji.classList.remove("active");
    }        
});

openFaceEmoji.addEventListener("click",function(){
    if (closedFaceEmoji.classList.contains("closed")){
        closedFaceEmoji.classList.add("active");
        openFaceEmoji.classList.remove("active");
    }        
});