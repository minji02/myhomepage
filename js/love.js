const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];

const leftButton = document.querySelector("#love i:first-child");
const rightButton = document.querySelector("#love i:last-child");
const picture = document.querySelector(".pictures img");

let currentIndex = 0;
function onClickLeftBtn(index) {
    if(currentIndex == 0) {
        currentIndex = images.length-1;
    }else {
        currentIndex = currentIndex-1;
    }
    picture.setAttribute("src", `img/${images[currentIndex]}`);
}

function onClickRightBtn() {
    if(currentIndex == images.length-1) {
        currentIndex = 0;
    }else {
        currentIndex = currentIndex+1;
    }
    picture.setAttribute("src", `img/${images[currentIndex]}`);
}  

leftButton.addEventListener("click", onClickLeftBtn);
rightButton.addEventListener("click", onClickRightBtn);